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
                            <img src={DocumentVector} style={{ "height": "200px" }} alt="Documentation" />
                            <h4 className="text-center mb-4">Documentation</h4>
                            <div className="text-start">
                                <p><a href="https://res.cloudinary.com/fdmgroup/raw/upload/v1631622147/fdmgroup/documents/Staff_Handbook_Acknowledgement_Form_r0kksr.doc" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFileAlt} color="#0d6efd" />Staff Handbook Acknowledgement Form</a></p>
                                <p><a href="https://res.cloudinary.com/fdmgroup/raw/upload/v1631622145/fdmgroup/documents/Professional_Skills_Workbook_May_2021_eguqoj.docx" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFileAlt} color="#0d6efd" />Professional Skills Workbook</a></p>
                                <p><a href="https://res.cloudinary.com/fdmgroup/image/upload/v1631622121/fdmgroup/documents/FDM_Remote_working_checklist_yfozql.pdf" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFileAlt} color="#0d6efd" />FDM Remote Working Checklist</a></p>
                                <p><a href="https://res.cloudinary.com/fdmgroup/image/upload/v1631622102/fdmgroup/documents/Fair-Work-Information-Statement_March_2021_hc9zrs.pdf" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFileAlt} color="#0d6efd" />Australian Fair Work Information Statement</a></p>
                                <p><a href="https://res.cloudinary.com/fdmgroup/image/upload/v1631622009/fdmgroup/documents/Australian_Staff_Handbook_v_12_AZ_changes_23022021_fofpvw.pdf" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFileAlt} color="#0d6efd" />FDM Staff Handbook</a></p>
                                <p><a href="https://securenyc.fdmgroup.com/global-protect/login.esp" target="_blank" rel="noreferrer" className="icon-link text-primary">View more files</a></p>
                            </div>
                        </div>
                        <div className="col-4 text-center px-5">
                            <img src={SettingVector} style={{ "height": "200px" }} alt="Setting" />
                            <h4 className="text-center mb-4">Settings</h4>
                            <div className="text-start">
                                <p><a href="/account/update" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faCogs} color="#0d6efd" />Manage own account</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faCogs} color="#0d6efd" />Add new recruiter</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faCogs} color="#0d6efd" />Add new interviewer</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faCogs} color="#0d6efd" />Manage FDM streams</a></p>
                                <p><a href="#!" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faCogs} color="#0d6efd" />Manage all accounts</a></p>
                                <p><a href="#!" className="icon-link text-primary">View more settings</a></p>
                            </div>
                        </div>
                        <div className="col-4 text-center px-5">
                            <img src={SearchVector} style={{ "height": "200px" }} alt="Video Tutorial" />
                            <h4 className="text-center mb-4">Video Tutorial</h4>
                            <div className="text-start">
                                <p><a href="https://www.youtube.com/watch?v=U1dvfP4fTjc" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFilm} color="#0d6efd" />Assign recruiter to new applicants</a></p>
                                <p><a href="https://www.youtube.com/watch?v=U1dvfP4fTjc" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFilm} color="#0d6efd" />Update applicant's details</a></p>
                                <p><a href="https://www.youtube.com/watch?v=U1dvfP4fTjc" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFilm} color="#0d6efd" />Assign interviewers to applicants</a></p>
                                <p><a href="https://www.youtube.com/watch?v=U1dvfP4fTjc" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFilm} color="#0d6efd" />Send email using templates</a></p>
                                <p><a href="https://www.youtube.com/watch?v=U1dvfP4fTjc" target="_blank" rel="noreferrer" className="icon-link text-dark"><FontAwesomeIcon className="fa-lg me-2" icon={faFilm} color="#0d6efd" />Check applicant's AC results</a></p>
                                <p><a href="https://www.youtube.com/user/FDMGroupVideos" target="_blank" rel="noreferrer" className="icon-link text-primary">View more tutorials</a></p>
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