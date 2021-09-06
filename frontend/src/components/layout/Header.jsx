import React, { Component } from 'react';
import Logo from '../../assets/images/FDMLogo-white.png';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={Logo} style={{ "height": "50px" }} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
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
                                    <li className="nav-item navbar-right">
                                        <a className="nav-link" href="/login">Log In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn text-light btn-danger" href="/signup">Sign Up</a>
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