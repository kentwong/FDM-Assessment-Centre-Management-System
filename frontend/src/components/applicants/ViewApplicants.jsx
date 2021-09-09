import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faEnvelopeOpenText, faDownload, faTrashAlt, envelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import OfferOfEmploymentTemplate from '../templates/OfferOfEmploymentTemplate';
import FollowUpTemplate from '../templates/FollowUpTemplate';
import RejectionTemplate from '../templates/RejectionTemplate';
import ACInviteTemplate from '../templates/ACInviteTemplate';
import VideoInterviewTemplate from '../templates/VideoInterviewTemplate';
import AptitudeTestTemplate from '../templates/AptitudeTestTemplate';

function ViewApplicants(props) {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            setCandidates(res.data);
        })
    }, [])

    const deleteCandidate = (id) => {
        CandidateService.deleteCandidate(id);
        setCandidates(candidates.filter(candidate => candidate.id !== id));
    }

    return (
        <div className="container my-5">
            <div className="container-fluid col-5 me-0 pe-0 mb-5">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <h2 className="text-center">Candidates List</h2>

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
                                    <>
                                        <tr key={candidate.id}>
                                            <td> {candidate.id} </td>
                                            <td> {candidate.firstName} {candidate.lastName} </td>
                                            <td> {candidate.stream.streamName} </td>
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
                                    </>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewApplicants;