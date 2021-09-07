import React, { Component } from 'react';
import CandidateService from '../../services/CandidateService';

class ViewApplicants extends Component {
    constructor(props) {
        super(props)

        this.state = {
            candidates: []
        }
    }

    componentDidMount() {
        CandidateService.getCandidates().then((res) => {
            console.log(res.data);
            this.setState({ candidates: res.data })
        })
    }

    render() {
        return (
            <div className="container my-5">
                <h2 className="text-center">Candidates List</h2>

                <div className="row">
                    <table className="table table-Striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="">Candidate ID</th>
                                <th className="">First Name</th>
                                <th className="">Last Name</th>
                                <th className="">University</th>
                                <th className="">CV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.candidates.map(
                                    candidate =>
                                        <tr key={candidate.id}>
                                            <td> {candidate.id} </td>
                                            <td> {candidate.firstName} </td>
                                            <td> {candidate.lastName} </td>
                                            <td> {candidate.university} </td>
                                            <td> {candidate.cv} </td>

                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ViewApplicants;