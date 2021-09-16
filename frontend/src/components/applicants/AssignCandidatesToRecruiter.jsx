import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AssignCandidatesToRecruiter(props) {

    const { unassignedCandidates, availRecruiters, error, success, assignCandidate, checkboxChange, countRemainingUnassigned } = props;

    return (
        <div>
            <div className="float-end">
                {unassignedCandidates.length === 0 ?
                    <button className="btn btn-success">
                        <FontAwesomeIcon className="fa-lg me-2" icon={faCheckCircle} /> All applicants are assigned to recruiters
                    </button> :
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalAssignCandidates">
                        <FontAwesomeIcon className="fa-lg me-2" icon={faExclamationCircle} />TO-DO: {unassignedCandidates.length} unassigned applicants
                    </button>}
            </div>
            <div className="modal fade" id="modalAssignCandidates" aria-hidden="true" aria-labelledby="modalAssignCandidatesLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">

                    <div className="modal-content">
                        <form onSubmit={(e) => assignCandidate(e)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalAssignCandidatesLabel">Assign Candidates to Recruiters</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Choose recruiters to randomly assign {unassignedCandidates.length} candidates:

                                {availRecruiters.map(
                                    recruiter => (
                                        <div key={recruiter.id}>
                                            <div className="form-check my-3">
                                                <input className="form-check-input my-2" type="checkbox" value="" id={"checkbox" + recruiter.id} onChange={() => checkboxChange(recruiter.id)} />
                                                <label className="form-check-label" htmlFor={"checkbox" + recruiter.id}>
                                                    Assign
                                                    <input id={"input" + recruiter.id} type="number" min="0" defaultValue="0" className="mx-2 text-center" maxLength="4" size="4" disabled onChange={(e) => countRemainingUnassigned(e, recruiter.id)} />
                                                    candidate(s) to {recruiter.firstName} {recruiter.lastName}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="modal-footer">
                                {error && <div className="alert alert-danger ms-0 me-auto" role="alert">
                                    {error}
                                </div>}
                                {success && <div className="alert alert-success ms-0 me-auto" role="alert">
                                    {success}
                                </div>}
                                <button type="submit" className="btn btn-danger" aria-label="Assign">Assign</button>
                                <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignCandidatesToRecruiter;