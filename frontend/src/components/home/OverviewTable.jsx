import React, { Component } from 'react';
import HomePageRecruiterService from '../../services/HomePageRecruiterService';

class OverviewTable extends Component {
    constructor(props){
        super(props)

        this.state = {
            candidatesOverviewData: [],
        }
    }

    componentDidMount() {
        HomePageRecruiterService.getAssessmentCentreResponsesHome().then((res) => {
            
            this.setState({ candidatesOverviewData: res.data })
            console.log(this.state.candidatesOverviewData);
        })
    }

    render() {
        return (
            <div className="custom-container">

                <h2 >Overview</h2>
                <table className="table table-striped table-bordered">
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
                            <td>Offered</td>
                            <td>{this.state.candidatesOverviewData.offers}</td>
                        </tr>
                        <tr>
                            <td>Rejected Applications</td>
                            <td>{this.state.candidatesOverviewData.rejectedApplications}</td>
                        </tr>
                    </tbody>
                </table>

                <button className='btn btn-primary'>Jump To Applications</button>
            </div>
        );
    }
}

export default OverviewTable;