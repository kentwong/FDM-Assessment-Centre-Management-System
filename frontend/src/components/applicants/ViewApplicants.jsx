import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import CandidateService from '../../services/CandidateService';
import RecruiterService from '../../services/RecruiterService';
import AssignCandidatesToRecruiter from './AssignCandidatesToRecruiter';
import SearchBar from './SearchBar';
import ShowCandidatesAssignedToMe from './ShowCandidatesAssignedToMe';
import ApplicantTableList from './ApplicantTableList';
import Pagination from './Pagination'

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
    const [candidatesPerPage] = useState(20)

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

    //Get current posts
    const indexOfLastCandidate = currentPage * candidatesPerPage;
    const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
    const currentCandidates = candidates.slice(indexOfFirstCandidate, indexOfLastCandidate)
    const howManyPages = Math.ceil(candidates.length / candidatesPerPage)

    return (
        <div className="container my-5">
            {console.log(candidates)}
            <div className="row">
                <div className="col-6">
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <div className="col-6">
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
            <h2 className="text-center">Candidates List </h2>

            <ShowCandidatesAssignedToMe
                showCandidatesAssignedToMe={showCandidatesAssignedToMe}
                setCandidatesAndUnassignedCandidates={setCandidatesAndUnassignedCandidates}
                candidates={candidates}
            />

            <ApplicantTableList candidates={currentCandidates} deleteCandidate={deleteCandidate} />

            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default withRouter(ViewApplicants);