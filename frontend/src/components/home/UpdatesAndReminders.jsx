import React, { Component } from 'react';
import AssessmentCentreService from '../../services/AssessmentCentreService';
import HomePageService from '../../services/HomePageService';


class UpdatesAndReminders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mostRecentAc: [],
            numCandidates: 0
        }

    }
    
    componentDidMount() {
       

        HomePageService.mostRecentAc().then((res) => {
            this.setState({ mostRecentAc: res.data })
            this.setState({ numCandidates: this.state.mostRecentAc.candidates.length })
            

        })
    }



    render() {
        if (localStorage.getItem('role') == "ACCoordinator") {
            return (
                <div>
                    <h2 className='text-center' >Updates And Reminders</h2>
                    <div className="list-group centreMe">
                        <a href="#" className="list-group-item list-group-item-danger list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Next Assesment Centre:</h5>
                                <small><a href="/view">View</a></small>
                            </div>
                            <p className="mb-1">
                                {this.state.mostRecentAc.start} <br />
                                {this.state.numCandidates} Candidates
                            </p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 ></h5>
                                <small className="text-muted"><a href="/applicant/edit/10">View</a></small>
                            </div>
                            <h5 >Mimi Nutbrown - Pending AC</h5>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">To-do:</h5>
                                <small className="text-muted"><a href="/calender">Assign</a></small>
                            </div>
                            <p className="mb-1">Go to Calender to assign applicants to assesment centres.</p>
                        </a>
                    </div>
                    
                </div>
            );
        }

        if (localStorage.getItem('role') == "recruiter") {
            return (
                <div>
                    <h2 classNameName='text-center' >Updates And Reminders</h2>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Lonardo Janos - Pending Video Interview
                            <span className="badge bg-primary rounded-pill"><a style={{color: 'white'}} href="/applicant/edit/21">View</a></span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Trudy Whalebelly - Pending Phone Screening
                            <span className="badge bg-primary rounded-pill"><a style={{color: 'white'}} href="/applicant/edit/22">View</a></span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Jump to applicants to assign new applicants to recruiters!
                            <span className="badge bg-primary rounded-pill"><a style={{color: 'white'}} href="/applicants">Go</a></span>
                        </li>
                    </ul>
                </div>
            );

        }

    }
}

export default UpdatesAndReminders;