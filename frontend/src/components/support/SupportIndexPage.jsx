import React, { Component } from 'react';
import QuickAccess from '../layout/QuickAccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faFileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import SearchVector from '../../assets/images/search.jpg';
import SettingVector from '../../assets/images/settings.jpg';
import DocumentVector from '../../assets/images/documents.jpg';

class SupportIndexPage extends Component {
    render() {
        return (
            <div>
                <div className="custom-container">
                    <h2 className="text-center mb-5">Help &#38; Support</h2>

                    <div className="row">
                        <div className="col-4 text-center px-5">
                            <img src={DocumentVector} style={{ "height": "200px" }} alt="Logo" />
                            <h4 className="text-center mb-4">Documentation</h4>
                            <div className="text-start">
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFileAlt} color="#0d6efd" />Assign recruiter to new applicants</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFileAlt} color="#0d6efd" />Update applicant's details</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFileAlt} color="#0d6efd" />Assign interviewers to applicants</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFileAlt} color="#0d6efd" />Send email using templates</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFileAlt} color="#0d6efd" />Check applicant's AC results</a></p>
                                <p><a href="#!" className="icon-link text-primary">View more files</a></p>
                            </div>
                        </div>
                        <div className="col-4 text-center px-5">
                            <img src={SettingVector} style={{ "height": "200px" }} alt="Logo" />
                            <h4 className="text-center mb-4">Settings</h4>
                            <div className="text-start">
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faCogs} color="#0d6efd" />Assign recruiter to new applicants</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faCogs} color="#0d6efd" />Update applicant's details</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faCogs} color="#0d6efd" />Assign interviewers to applicants</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faCogs} color="#0d6efd" />Send email using templates</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faCogs} color="#0d6efd" />Check applicant's AC results</a></p>
                                <p><a href="#!" className="icon-link text-primary">View more settings</a></p>
                            </div>
                        </div>
                        <div className="col-4 text-center px-5">
                            <img src={SearchVector} style={{ "height": "200px" }} alt="Logo" />
                            <h4 className="text-center mb-4">Video Tutorial</h4>
                            <div className="text-start">
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFilm} color="#0d6efd" />Assign recruiter to new applicants</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFilm} color="#0d6efd" />Update applicant's details</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFilm} color="#0d6efd" />Assign interviewers to applicants</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFilm} color="#0d6efd" />Send email using templates</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faFilm} color="#0d6efd" />Check applicant's AC results</a></p>
                                <p><a href="#!" className="icon-link text-primary">View more tutorials</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-container">
                    <h2 className="text-center mb-5">Quick Access</h2>
                    <QuickAccess colSize={'2'} />
                </div>
            </div>
        );
    }
}

export default SupportIndexPage;