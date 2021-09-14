import React, { Component } from 'react';
import HomePageService from '../../services/HomePageService';
import CandidateService from '../../services/CandidateService';

class OverviewTable extends Component {
    constructor(props){
        super(props)

        this.state = {
            candidatesOverviewData: []
        }
    
    }

    componentDidMount() {
        HomePageService.getAssessmentCentreResponsesHome().then((res) => {
            
            this.setState({ candidatesOverviewData: res.data })
        })

        CandidateService.getCandidates().then((res) => {
            let filtered = res.data.filter(candidate => candidate.recruiterId === 0);
            console.log(filtered.length)
            const unassignedCandidates = filtered.length;
        })
    }


    render() {
        if (localStorage.getItem('role')  == "recruiter") {
            return (
                <div>
                    <h2 className='centreMe'>Overview</h2>
                    <table className="table table-striped table-bordered" style={{height: "275px"}}>
                        <tbody>
                            <tr>
                                <td>Pending CV</td>
                                <td>{this.state.candidatesOverviewData.cv}</td>
                            </tr>
                            <tr>
                                <td>Pending Phone Screening</td>
                                <td>{this.state.candidatesOverviewData.phoneScreening}</td>
                            </tr>
                            <tr>
                                <td>Pending Aptitude Test</td>
                                <td>{this.state.candidatesOverviewData.aptitudeTest}</td>
                            </tr>
                            <tr>
                                <td>Pending Video Interview</td>
                                <td>{this.state.candidatesOverviewData.videoInterview}</td>
                            </tr>
                            <tr>
                                <td>Pending AC</td>
                                <td>{this.state.candidatesOverviewData.ac}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>New Applications</td>
                                <td>{this.state.candidatesOverviewData.newApplications}</td>
                            </tr>
                            <tr>
                                <td>Offers Sent</td>
                                <td>{this.state.candidatesOverviewData.offers}</td>
                            </tr>
                            <tr>
                                <td>Rejected Applications</td>
                                <td>{this.state.candidatesOverviewData.rejectedApplications}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="centreMe">
                        <a href="/applicants">
                            <button className='btn btn-primary'>Jump To Applications</button>
                        </a>
                    </div>
                </div>
            );
        }
        if (localStorage.getItem('role') == "ACCoordinator") {
            return (
                <div>
                    <h2 className='centreMe'>Overview</h2>
                    <table className="table table-striped table-bordered" style={{height: "275px"}}>
                        <tbody>
                            <tr>
                                <td>Unassigned Applicants</td>
                                <td> hi</td>
                            </tr>
                            <tr>
                                <td>Upcoming AC's</td>
                                <td>{this.state.candidatesOverviewData.phoneScreening}</td>
                            </tr>
                            <tr>
                                <td>Completed AC's</td>
                                <td>{this.state.candidatesOverviewData.aptitudeTest}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Total Applicants Registered</td>
                                <td>{this.state.candidatesOverviewData.videoInterview}</td>
                            </tr>
                            <tr>
                                <td>Registered Today</td>
                                <td>{this.state.candidatesOverviewData.ac}</td>
                            </tr>
                            
                            <tr>
                                <td>Registered In The Past 5 Days</td>
                                <td>{this.state.candidatesOverviewData.newApplications}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="centreMe">
                        <a href="/applicants">
                            <button className='btn btn-primary'>Jump To Applications</button>
                        </a>
                    </div>
                </div>
            );
        }
    }
}

export default OverviewTable;