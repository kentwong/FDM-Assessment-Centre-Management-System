import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faEnvelopeOpenText, faDownload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ViewApplicants(props) {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            setCandidates(res.data);
        })
    })

    const deleteCandidate = (id) => {
        CandidateService.deleteCandidate(id);
        setCandidates(candidates.filter(candidate => candidate.id !== id));
    }

    return (
        <div className="container my-5">
            <div className="container-fluid col-5 me-0 pe-0 mb-5">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <h2 className="text-center">Candidates List</h2>

            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="">ID</th>
                            <th className="">Name</th>
                            <th className="">Stream</th>
                            <th className="">Status</th>
                            <th className="">Phone</th>
                            <th className="">Email</th>
                            <th className="">CV</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidates.map(
                                candidate =>
                                    <tr key={candidate.id}>
                                        <td> {candidate.id} </td>
                                        <td> {candidate.firstName} {candidate.lastName} </td>
                                        <td> {candidate.stream.streamName} </td>
                                        <td> {candidate.status} </td>
                                        <td> {candidate.phoneNumber} </td>
                                        <td> {candidate.email}</td>
                                        <td> <a className="download" href={candidate.cv}><FontAwesomeIcon className="fa-lg" icon={faDownload} color="#0d6efd" /></a> </td>
                                        <td>
                                            <a href={'mailto:' + candidate.email}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" /></a>
                                            <a href={'/applicant/edit/' + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faUserEdit} color="#0d6efd" /></a>
                                            <FontAwesomeIcon className="fa-lg icon-link" icon={faTrashAlt} color="#0d6efd" onClick={() => deleteCandidate(candidate.id)} />
                                        </td>

                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default ViewApplicants;