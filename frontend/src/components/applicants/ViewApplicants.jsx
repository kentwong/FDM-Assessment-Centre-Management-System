import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import CandidateService from '../../services/CandidateService';
import RecruiterService from '../../services/RecruiterService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faEnvelopeOpenText, faDownload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import OfferOfEmploymentTemplate from '../templates/OfferOfEmploymentTemplate';
import FollowUpTemplate from '../templates/FollowUpTemplate';
import RejectionTemplate from '../templates/RejectionTemplate';
import ACInviteTemplate from '../templates/ACInviteTemplate';
import VideoInterviewTemplate from '../templates/VideoInterviewTemplate';
import AptitudeTestTemplate from '../templates/AptitudeTestTemplate';
import AssignCandidatesToRecruiter from './AssignCandidatesToRecruiter';
import SearchBar from './SearchBar';
import ShowCandidatesAssignedToMe from './ShowCandidatesAssignedToMe';

function ViewApplicants(props) {

    const [candidates, setCandidates] = useState([]);
    const [unassignedCandidates, setUnassignedCandidates] = useState([]);
    const excludeSearchColumns = ['id', 'aptitude_score', 'cv', 'notes', 'recruiter'];
    const [availRecruiters, setAvailRecruiters] = useState([]);
    const [countCandidatesToBeAssigned, setCountCandidatesToBeAssigned] = useState([]);
    const [remainingCandidates, setRemainingCandidates] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setCandidatesAndUnassignedCandidates();

        RecruiterService.getRecruiters().then(res => {
            setAvailRecruiters(res.data);
        })
    }, [])

    const setCandidatesAndUnassignedCandidates = () => {
        CandidateService.getCandidates().then((res) => {
            setCandidates(res.data);

            let filtered = res.data.filter(candidate => candidate.recruiterId === 0);
            setUnassignedCandidates(filtered);
        })
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
        console.log(e.target);
        console.log('count candidates to be assigned: ', countCandidatesToBeAssigned);


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

            // assign candidate logic
            console.log('this is the unassigned candidates: ', unassignedCandidates)

            let done = 0;
            for (const key in countCandidatesToBeAssigned) {

                if (countCandidatesToBeAssigned.hasOwnProperty(key)) {

                    console.log(`${key}: ${countCandidatesToBeAssigned[key]}`);
                    // key = recruiter.id
                    // countCandidatesToBeAssigned[key] ==> number of candidates to be assigned

                    for (let i = 0; i < countCandidatesToBeAssigned[key]; i++) {
                        // loop through the number of candidates set

                        console.log('this is the for loop of:', unassignedCandidates[i + done]);
                        unassignedCandidates[i + done].recruiter = { id: parseInt(key) };

                        console.log('this is the added recruiter: ', unassignedCandidates[i + done]);

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

            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="">ID</th>
                            <th className="">Name</th>
                            <th className="">Stream</th>
                            <th className="">Status</th>
                            <th className="">Phone</th>
                            <th className="">Email</th>
                            <th className="">CV</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidates.map(
                                candidate =>
                                    <tr key={candidate.id}>
                                        <td> {candidate.id} </td>
                                        <td> {candidate.firstName} {candidate.lastName} </td>
                                        <td> {candidate.streamName} </td>
                                        <td> {candidate.status} </td>
                                        <td> {candidate.phoneNumber} </td>
                                        <td> {candidate.email}</td>
                                        <td> <a className="download" href={candidate.cv}><FontAwesomeIcon className="fa-lg" icon={faDownload} color="#0d6efd" /></a> </td>
                                        <td>
                                            <a href="/" data-bs-toggle="modal" data-bs-target={"#modalEmail" + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" /></a>
                                            <div className="modal fade" id={"modalEmail" + candidate.id} aria-hidden="true" aria-labelledby="modalEmailLabel" tabIndex="-1">
                                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="modalEmailLabel">Email Templates</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={'mailto:' + candidate.email}>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    Blank Email
                                                                </a>
                                                            </div>
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Offer of Employment - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(OfferOfEmploymentTemplate(candidate))}`
                                                                }>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    FDM Offer of Employment
                                                                </a>
                                                            </div>
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Follow Up - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(FollowUpTemplate(candidate))}`
                                                                }>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    Follow-up
                                                                </a>
                                                            </div>
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Letter of Rejection - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(RejectionTemplate(candidate))}`
                                                                }>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    Rejection
                                                                </a>
                                                            </div>
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Assessment Centre Invitation - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(ACInviteTemplate(candidate))}`
                                                                }>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    AC Invitation
                                                                </a>
                                                            </div>
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Video Interview Invitation - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(VideoInterviewTemplate(candidate))}`
                                                                }>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    Video Interview Invitation
                                                                </a>
                                                            </div>
                                                            <div className="mb-2">
                                                                <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Aptitude Test - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(AptitudeTestTemplate(candidate))}`
                                                                }>
                                                                    <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                    Aptitude Test
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <a href={'/applicant/edit/' + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faUserEdit} color="#0d6efd" /></a>

                                            <a href="/" data-bs-toggle="modal" data-bs-target={"#modalDelete" + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faTrashAlt} color="#0d6efd" /></a>
                                            <div className="modal fade" id={"modalDelete" + candidate.id} aria-hidden="true" aria-labelledby="modalDeleteLabel" tabIndex="-1">
                                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="modalDeleteLabel">Delete Confirmation</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Are you sure you want to delete the details of {candidate.firstName} {candidate.lastName}?
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button className="btn btn-danger" data-bs-dismiss="modal" aria-label="Delete" onClick={() => deleteCandidate(candidate.id)}>Delete</button>
                                                            <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withRouter(ViewApplicants);