import React, { Component } from 'react';
import Logo from '../../assets/images/FDMLogo-white.png';
import ProfilePic from '../../assets/images/profilepic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/login"><img src={Logo} style={{ "height": "50px" }} /></a>
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
                                        <a className="nav-link text-light" href="#" role="button"> <FontAwesomeIcon className="fa-lg bin" icon={faTh} color="rgba(255,255,255,.55)" style={{ "fontSize": "35px" }} /></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-light dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img src={ProfilePic} style={{ "height": "35px", "borderRadius": "5px" }} /></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" >Manage Profile</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="/">Log out</a></li>
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