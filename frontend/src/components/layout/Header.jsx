import React, { Component } from 'react';
import Logo from '../../assets/images/FDMLogo-white.png';
import ProfilePic from '../../assets/images/profilepic.png';
import JobTrain from '../../assets/images/JobTrain.png';
import LaunchPadRecruits from '../../assets/images/LaunchPad.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Outlook from '../../assets/images/Outlook.png';
import Eploy from '../../assets/images/Eploy.png';
import Vervoe from '../../assets/images/Vervoe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser () {
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/login"><img src={Logo} style={{ "height": "50px" }} alt="Logo" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li className="nav-item">
                                        <a className="nav-link" href="/home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/applicants">Applicants</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/calender">Calender</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/results">Results Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/support">Help &#38; Support</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/testREMOVEBEFORESUBMISSION">VINCENT_TEST_PAGE</a>
                                    </li>
                                </ul>
                                <div className="navbar-nav ms-auto">
                                    <li >
                                        <a className="nav-link text-light" href="/" data-bs-toggle="modal" data-bs-target="#modalFullscreen"> <FontAwesomeIcon className="fa-lg bin" icon={faTh} color="rgba(255,255,255,.55)" style={{ "fontSize": "35px" }} /></a>
                                        <div className="modal fade" id="modalFullscreen" aria-hidden="true" aria-labelledby="modalFullscreenLabel" tabIndex="-1">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="modalFullscreenLabel">Quick Access</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row quick-access-link">
                                                            <div className="col-4">
                                                                <a href="https://jobtrain.co.uk/" target="_blank" rel="noreferrer">
                                                                    <img src={JobTrain} alt="JobTrain" />
                                                                    <p>JobTrain</p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a href="https://support.launchpadrecruits.com/en/login" target="_blank" rel="noreferrer">
                                                                    <img src={LaunchPadRecruits} alt="LaunchPadRecruits" />
                                                                    <p>Launchpad Recruits</p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                                                                    <img src={LinkedIn} alt="LinkedIn" />
                                                                    <p>LinkedIn</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="row quick-access-link">
                                                            <div className="col-4">
                                                                <a href="https://outlook.office365.com/mail/inbox" target="_blank" rel="noreferrer">
                                                                    <img src={Outlook} alt="Outlook" />
                                                                    <p>Outlook</p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a href="https://careers.eploy.co.uk/registration.aspx" target="_blank" rel="noreferrer">
                                                                    <img src={Eploy} alt="Eploy" />
                                                                    <p>Eploy</p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a href="https://app.vervoe.com/login" target="_blank" rel="noreferrer">
                                                                    <img src={Vervoe} alt="Vervoe" />
                                                                    <p>Vervoe</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-light dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false"><img src={ProfilePic} style={{ "height": "35px", "borderRadius": "5px" }} alt="profile" /></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/" >Manage Profile</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <div className="dropdown-item">
                                                    <button style={{all: 'unset'}} onClick={this.logoutUser}>
                                                        Log Out
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;