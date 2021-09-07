import React, { Component } from 'react';
import CandidateService from '../../services/CandidateService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

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
                <div class="container-fluid col-5 me-0 pe-0 mb-5">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <h2 className="text-center">Candidates List</h2>

                <div className="row">
                    <table className="table table-Striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="">ID</th>
                                <th className="">First Name</th>
                                <th className="">Last Name</th>
                                <th className="">Stream</th>
                                <th className="">University</th>
                                <th className="">Phone</th>
                                <th className="">Email</th>
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
                                            <td> {candidate.stream.streamName} </td>
                                            <td> {candidate.university} </td>
                                            <td> {candidate.phoneNumber} </td>
                                            <td> {candidate.email} </td>
                                            <td> <a href={candidate.cv}><FontAwesomeIcon className="fa-lg download" icon={faDownload} color="#0d6efd" /></a> </td>

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