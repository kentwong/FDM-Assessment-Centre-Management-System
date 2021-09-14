import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteApplicantButton(props) {

    const { candidate, deleteCandidate } = props;

    return (
        <div className="d-inline">
            <a href="/" data-bs-toggle="modal" data-bs-target={"#modalDelete" + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faTrashAlt} color="#0d6efd" /></a>
            <div className="modal fade" id={"modalDelete" + candidate.id} aria-hidden="true" aria-labelledby="modalDeleteLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalDeleteLabel">Delete Confirmation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete the details of {candidate.firstName} {candidate.lastName}?
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" data-bs-dismiss="modal" aria-label="Delete" onClick={() => deleteCandidate(candidate.id)}>Delete</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteApplicantButton;