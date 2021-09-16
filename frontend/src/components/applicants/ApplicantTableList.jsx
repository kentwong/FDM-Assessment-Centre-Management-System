import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faDownload, faSort } from '@fortawesome/free-solid-svg-icons';
import SendEmailButton from './SendEmailButton';
import DeleteApplicantButton from './DeleteApplicantButton';


function ApplicantTableList(props) {

    const { candidates, deleteCandidate, toggleSortId, toggleSortName, toggleSortStream, toggleSortStatus } = props;

    return (
        <div>
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="icon-link" onClick={() => toggleSortId()}>ID <FontAwesomeIcon icon={faSort} /></th>
                            <th className="icon-link" onClick={() => toggleSortName()}>Name <FontAwesomeIcon icon={faSort} /></th>
                            <th className="icon-link" onClick={() => toggleSortStream()} > Stream < FontAwesomeIcon icon={faSort} /></th>
                            <th className="icon-link" onClick={() => toggleSortStatus()} > Status < FontAwesomeIcon icon={faSort} /></th>
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
                                        <td> {candidate.streamName} </td>
                                        <td> {candidate.status} </td>
                                        <td> {candidate.phoneNumber} </td>
                                        <td> {candidate.email}</td>
                                        <td> <a className="download" href={candidate.cv}><FontAwesomeIcon className="fa-lg" icon={faDownload} color="#0d6efd" /></a> </td>
                                        <td>
                                            <SendEmailButton candidate={candidate} />
                                            <a href={'/applicant/edit/' + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faUserEdit} color="#0d6efd" /></a>
                                            <DeleteApplicantButton candidate={candidate} deleteCandidate={deleteCandidate} />
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
}

export default ApplicantTableList;