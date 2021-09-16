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
import { faSlidersH, faSortAmountDownAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
    const [loading, setLoading] = useState(false);

    // For sorting columns
    const [sorting, setSorting] = useState({ field: "", order: "" })

    //For pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [candidatesPerPage, setCandidatesPerPage] = useState(10)

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
        // CandidateService.getCandidates().then((res) => {
        let filtered = candidates.filter(candidate => candidate.recruiterId.toString() === id)
        setCandidates(filtered);
        // });
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

    //Get current candidate pages
    const indexOfLastCandidate = currentPage * candidatesPerPage;
    const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
    const currentCandidates = candidates.slice(indexOfFirstCandidate, indexOfLastCandidate)
    const howManyPages = Math.ceil(candidates.length / candidatesPerPage)

    const dynamicSort = (property) => {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    //For sorting id
    const [idAssend, setIdAssend] = useState(true);
    const toggleSortId = () => {
        idAssend ?
            setCandidates(candidates.sort(dynamicSort("-id"))) :
            setCandidates(candidates.sort(dynamicSort("id")))
        setIdAssend(!idAssend)
    }

    //For sorting name
    const [nameAssend, setNameAssend] = useState(true);
    const toggleSortName = () => {
        nameAssend ?
            setCandidates(candidates.sort(dynamicSort("-firstName"))) :
            setCandidates(candidates.sort(dynamicSort("firstName")))
        setNameAssend(!nameAssend)
    }

    //For sorting stream
    const [streamAssend, setStreamAssend] = useState(true);
    const toggleSortStream = () => {
        streamAssend ?
            setCandidates(candidates.sort(dynamicSort("-streamName"))) :
            setCandidates(candidates.sort(dynamicSort("streamName")))
        setStreamAssend(!streamAssend)
    }

    //For sorting name
    const [statusAssend, setStatusAssend] = useState(true);
    const toggleSortStatus = () => {
        statusAssend ?
            setCandidates(candidates.sort(dynamicSort("-status"))) :
            setCandidates(candidates.sort(dynamicSort("status")))
        setStatusAssend(!statusAssend)
    }


    const [recruiterFilter, setRecruiterFilter] = useState([]);
    //For filtering 
    const checkboxFilterChange = (id) => {
        let checkbox = document.getElementById('checkboxFilterRecruiter' + id);
        console.log('id', id)
        if (checkbox.checked) {
            setRecruiterFilter(prev => prev)
            CandidateService.getCandidates().then((res) => {

                let filtered = res.data.filter(candidate => candidate.recruiterId.toString() === id.toString())
                setCandidates(filtered);
            });
        } else {
            console.log('is this run?')
            let index = recruiterFilter.indexOf(id);
            recruiterFilter.splice(index, 1)
            CandidateService.getCandidates().then((res) => {
                setCandidates(res.data);
            });
        };
        console.log('recruiterFilter ', recruiterFilter)
    }

    const handleFilter = (filter) => {

    }

    // const showCandidatesAssignedToMe = (id) => {
    //     CandidateService.getCandidates().then((res) => {
    //         let filtered = res.data.filter(candidate => candidate.recruiterId.toString() === id)
    //         setCandidates(filtered);
    //     });
    // }

    return (
        <div className="container my-5">
            {console.log(candidates)}
            <div className="row">
                <div className="col-4 pe-0 ps-1">
                    <SearchBar handleSearch={handleSearch} />
                </div>

                <div className="col-4 ps-0">
                    {/* //Filter Button */}
                    <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalFilter"><FontAwesomeIcon className="fa-lg me-2" icon={faSlidersH} />Filter</button>
                </div>


                <div className="modal fade" id="modalFilter" aria-hidden="true" aria-labelledby="modalFilterLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">

                        <div className="modal-content">
                            <form onSubmit={(e) => handleFilter(e)}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalFilterLabel">Filter Candidates Data</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <ShowCandidatesAssignedToMe
                                        showCandidatesAssignedToMe={showCandidatesAssignedToMe}
                                        setCandidatesAndUnassignedCandidates={setCandidatesAndUnassignedCandidates}
                                        candidates={candidates}
                                    />



                                    Show candidates assigned to:
                                    {availRecruiters.map(
                                        recruiter => (
                                            <div key={recruiter.id}>
                                                <div className="form-check my-1">
                                                    <input className="form-check-input" type="checkbox" value="" id={"checkboxFilterRecruiter" + recruiter.id} onChange={() => checkboxFilterChange(recruiter.id)} />
                                                    <label className="form-check-label" htmlFor={"checkboxFilterRecruiter" + recruiter.id}>
                                                        {recruiter.firstName} {recruiter.lastName}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}




                                </div>

                                <div className="modal-footer">
                                    {error && <div className="alert alert-danger ms-0 me-auto" role="alert">
                                        {error}
                                    </div>}
                                    {success && <div className="alert alert-success ms-0 me-auto" role="alert">
                                        {success}
                                    </div>}
                                    <button type="submit" className="btn btn-danger" aria-label="Filter">Reset</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Done & Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
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
                    <span className="fs-6 text-secondary float-end" style={{ "marginTop": "-32px" }}>Found {candidates.length} candidates</span>
                </div>
            </div>

            <ApplicantTableList
                candidates={currentCandidates}
                deleteCandidate={deleteCandidate}
                toggleSortId={toggleSortId}
                toggleSortName={toggleSortName}
                toggleSortStream={toggleSortStream}
                toggleSortStatus={toggleSortStatus}
            />

            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />

            <div className="row mt-4">
                <div className="col-12 p-0">
                    <div class="btn-group me-2">
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