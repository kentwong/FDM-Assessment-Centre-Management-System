import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import CandidateService from '../../services/CandidateService';
import RecruiterService from '../../services/RecruiterService';
import AssignCandidatesToRecruiter from './AssignCandidatesToRecruiter';
import SearchBar from './SearchBar';
import ShowCandidatesAssignedToMe from './ShowCandidatesAssignedToMe';
import ApplicantTableList from './ApplicantTableList';
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import XLSX from 'xlsx';
import ExportButton from './ExportButton';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function ViewApplicants(props) {

    const [candidates, setCandidates] = useState([]);
    const [unassignedCandidates, setUnassignedCandidates] = useState([]);
    const excludeSearchColumns = ['id', 'aptitude_score', 'cv', 'notes', 'recruiter'];
    const [availRecruiters, setAvailRecruiters] = useState([]);
    const [countCandidatesToBeAssigned, setCountCandidatesToBeAssigned] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false)

    //For pagination
    // const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [candidatesPerPage, setCandidatesPerPage] = useState(20)

    useEffect(() => {
        setCandidatesAndUnassignedCandidates();

        RecruiterService.getRecruiters().then(res => {
            setAvailRecruiters(res.data);
        })
    }, [])

    const setCandidatesAndUnassignedCandidates = () => {
        setLoading(true);
        CandidateService.getCandidates().then((res) => {
            setCandidates(res.data);

            let filtered = res.data.filter(candidate => candidate.recruiterId === 0);
            setUnassignedCandidates(filtered);
        })
        setLoading(false);
    }

    const deleteCandidate = (id) => {
        CandidateService.deleteCandidate(id);
        setCandidates(candidates.filter(candidate => candidate.id !== id));
    }

    const handleSearch = (search) => {
        CandidateService.getCandidates().then((res) => {
            let filtered = res.data
                .filter(candidate => {
                    return Object.keys(candidate).some(key => {
                        return excludeSearchColumns.includes(key) ? false : candidate[key].toString().toLowerCase().includes(search.toLowerCase().trim())
                    })
                });
            setCandidates(filtered);
        })
    }

    const showCandidatesAssignedToMe = (id) => {
        CandidateService.getCandidates().then((res) => {
            let filtered = res.data.filter(candidate => candidate.recruiterId.toString() === id)
            setCandidates(filtered);
        });
    }

    const assignCandidate = (e) => {
        e.preventDefault();

        let count = 0;
        for (const key in countCandidatesToBeAssigned) {

            if (countCandidatesToBeAssigned.hasOwnProperty(key)) {

                console.log(`${key}: ${countCandidatesToBeAssigned[key]}`);
                count = count + parseInt(countCandidatesToBeAssigned[key]);
            }
        }

        let diff = count - unassignedCandidates.length;
        let candidate = (diff > 1 || diff < -1) ? 'candidates' : 'candidate';

        if (count > unassignedCandidates.length) {
            setError(`The total number entered is over by ${diff} ${candidate}.`);
        }
        else if (count < unassignedCandidates.length) {
            setError(`There are still ${diff.toString().substring(1)} ${candidate} with no recruiter assigned.`);
        }
        else {
            setError('');
            let done = 0;
            for (const key in countCandidatesToBeAssigned) {
                if (countCandidatesToBeAssigned.hasOwnProperty(key)) {
                    for (let i = 0; i < countCandidatesToBeAssigned[key]; i++) {
                        unassignedCandidates[i + done].recruiter = { id: parseInt(key) };
                        CandidateService.updateCandidate(unassignedCandidates[i + done], unassignedCandidates[i + done].id);
                    }
                    done = done + parseInt(countCandidatesToBeAssigned[key]);
                }
            }
            setError('');
            setSuccess(`All done! You may close the window now.`);
        }
    }

    const checkboxChange = (id) => {
        let input = document.getElementById('input' + id);
        let checkbox = document.getElementById('checkbox' + id);
        if (checkbox.checked) {
            input.disabled = false
        } else {
            input.value = '0';
            let newObj = { [id]: '0' };
            setCountCandidatesToBeAssigned(
                { ...countCandidatesToBeAssigned, ...newObj }
            );
            input.disabled = true;
        };
    }

    const countRemainingUnassigned = (e, id) => {
        e.preventDefault();
        console.log('e', e.target.value)

        let newObj = { [id]: e.target.value };
        setCountCandidatesToBeAssigned(
            { ...countCandidatesToBeAssigned, ...newObj }
        );
    }

    const exportToExcel = () => {
        const newData = candidates.map(candidate => {
            delete candidate.history;
            delete candidate.address;
            delete candidate.stream;
            return candidate;
        })
        const worksheet = XLSX.utils.json_to_sheet(newData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "candidates")

        let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        XLSX.writeFile(workbook, "FDM_Candidates_Data.xlsx");
    }

    const columns = [
        { title: "ID", field: "id" },
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "Email Address", field: "email" },
        { title: "Stream", field: "streamName" },
        { title: "Status", field: "status" }
    ]

    const exportToPdf = () => {
        const doc = new jsPDF();
        doc.text("FDM Candidate's List", 20, 10);
        doc.autoTable({
            columns: columns.map(col => ({ ...col, dataKey: col.field })),
            body: candidates
        })
        doc.save("FDM_Candidates_Data.pdf");
    }

    //Get current posts
    const indexOfLastCandidate = currentPage * candidatesPerPage;
    const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
    const currentCandidates = candidates.slice(indexOfFirstCandidate, indexOfLastCandidate)
    const howManyPages = Math.ceil(candidates.length / candidatesPerPage)

    return (
        <div className="container my-5">
            {console.log(candidates)}
            <div className="row">
                <div className="col-4 pe-0 ps-1">
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <div className="col-4 ps-0">
                    <button className="btn btn-primary me-2"><FontAwesomeIcon className="fa-lg me-2" icon={faSlidersH} />Filter</button>
                </div>
                <div className="col-4 pe-0">
                    <AssignCandidatesToRecruiter
                        unassignedCandidates={unassignedCandidates}
                        availRecruiters={availRecruiters}
                        success={success}
                        error={error}
                        assignCandidate={assignCandidate}
                        checkboxChange={checkboxChange}
                        countRemainingUnassigned={countRemainingUnassigned}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 p-0">
                    <h2 className="text-center">Candidates List </h2>
                    <ExportButton exportToExcel={exportToExcel} exportToPdf={exportToPdf} />
                </div>
            </div>


            {/* <div className="row">
                <div className="col-6">
                    <ShowCandidatesAssignedToMe
                        showCandidatesAssignedToMe={showCandidatesAssignedToMe}
                        setCandidatesAndUnassignedCandidates={setCandidatesAndUnassignedCandidates}
                        candidates={candidates}
                    />
                </div>
                <div className="col-6">
                    <div class="btn-group mt-2 mb-4 float-end">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {candidatesPerPage} Candidates Per Page
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button" onClick={() => setCandidatesPerPage(10)}>10 Candidates</button></li>
                            <li><button class="dropdown-item" type="button" onClick={() => setCandidatesPerPage(20)}>20 Candidates</button></li>
                            <li><button class="dropdown-item" type="button" onClick={() => setCandidatesPerPage(50)}>50 Candidates</button></li>
                            <li><button class="dropdown-item" type="button" onClick={() => setCandidatesPerPage(100)}>100 Candidates</button></li>
                        </ul>
                    </div>
                </div>
            </div> */}


            <ApplicantTableList candidates={currentCandidates} deleteCandidate={deleteCandidate} />

            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />

            <div className="row mt-4">
                <div className="col-12 p-0">
                    <a href="/applicant/add" className="ps-0">
                        <button className="btn btn-primary">
                            <FontAwesomeIcon className="fa-lg me-2" icon={faUserPlus} />
                            Add New Applicant
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ViewApplicants);