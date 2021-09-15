import React, { Component } from 'react';

function ShowCandidatesAssignedToMe(props) {

    const { showCandidatesAssignedToMe, setCandidatesAndUnassignedCandidates, candidates } = props;
    return (
        <div>
            <div className="mt-2 mb-4">
                <input type="radio" class="btn-check" name="options-outlined" id="me" autoComplete="off" onClick={() => {
                    showCandidatesAssignedToMe(localStorage.getItem('user'))
                }} />
                <label className="btn btn-outline-primary me-2" htmlFor="me">Show Candidates Assigned To Me</label>

                <input type="radio" class="btn-check" name="options-outlined" id="all" autoComplete="off" onClick={() => {
                    setCandidatesAndUnassignedCandidates()
                }} />
                <label className="btn btn-outline-primary me-2" htmlFor="all">Show All</label>
                <span className="fs-6 text-secondary">Found {candidates.length} candidates</span>
            </div>
        </div>
    );
}

export default ShowCandidatesAssignedToMe;