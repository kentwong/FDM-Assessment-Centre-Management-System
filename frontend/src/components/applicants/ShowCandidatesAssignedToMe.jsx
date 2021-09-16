import React, { Component } from 'react';

function ShowCandidatesAssignedToMe(props) {

    const { showCandidatesAssignedToMe, setCandidatesAndUnassignedCandidates, candidates } = props;
    return (
        <div>
            <div className="mt-2 mb-4">
                <input type="radio" class="btn-check" name="options-outlined" id="me" autocomplete="off" onClick={() => {
                    showCandidatesAssignedToMe(localStorage.getItem('user'))
                }} />
                <label className="btn btn-outline-primary me-2" for="me">Show Candidates Assigned To Me</label>

                <input type="radio" class="btn-check" name="options-outlined" id="all" autocomplete="off" onClick={() => {
                    setCandidatesAndUnassignedCandidates()
                }} />
                <label className="btn btn-outline-primary me-2" for="all">Show All</label>
            </div>
        </div>
    );
}

export default ShowCandidatesAssignedToMe;