import React, { Component } from 'react';
import Logo from '../../assets/images/FDMLogo-white.png';
import ProfilePic from '../../assets/images/profilepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import QuickAccess from './QuickAccess';

class Header extends Component {

    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        window.location.reload(false);
    }

    render() {
        if (!localStorage.getItem('user')) {
            return (
                <div>
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/login"><img src={Logo} style={{ "height": "50px" }} alt="Logo" /></a>

                            </div>
                        </nav>
                    </header>
                </div>
            )
        }

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
                                                        <QuickAccess colSize={'4'} />
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
                                                <div className="dropdown-item" onClick={this.logoutUser}>
                                                    Log Out
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