import React, { Component } from 'react';
import OfferOfEmploymentTemplate from '../templates/OfferOfEmploymentTemplate';
import FollowUpTemplate from '../templates/FollowUpTemplate';
import RejectionTemplate from '../templates/RejectionTemplate';
import ACInviteIntervieweeTemplate from '../templates/ACInviteIntervieweeTemplate';
import VideoInterviewTemplate from '../templates/VideoInterviewTemplate';
import AptitudeTestTemplate from '../templates/AptitudeTestTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function SendEmailButton({ candidate }) {

    return (
        <div className="d-inline">
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
                                                                &body=${encodeURIComponent(ACInviteIntervieweeTemplate(candidate))}`
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
        </div>
    );

}

export default SendEmailButton;