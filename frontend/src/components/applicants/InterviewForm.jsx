import React, { useState } from 'react';
import CandidateService from '../../services/CandidateService';

function InterviewForm(props) {

    const [firstName, setFirstName] = useState('');

    const submitInterviewForm = e => {
        e.preventDefault();

        // CandidateService.createCandidate(candidate).then(res => {
        //     props.history.push('/applicants');
        // });
    }

    const nullFunction = e => {
        e.preventDefault();
    }

    return (
        <div className="custom-container">
            <form onSubmit={submitInterviewForm}>
                <h2 className="mb-5">Assessment Centre - Interview Form</h2>
                <div className="row mb-3">
                    <div className="col-md-2">
                        <label htmlFor="firstName" className="form-label">Interview Type <span className="text-danger">*</span></label>
                        <input list="interviewTypeList" className="form-control" id="interviewType" onChange={e => nullFunction} required />
                        <datalist id="interviewTypeList">
                            <option value="Placeholder Type 1" />
                            <option value="Placeholder Type 2" />
                            <option value="Placeholder Type 3" />
                        </datalist>
                    </div>
                </div>

                <button type="submit" className="btn btn-success me-2 mt-5">Add</button>
                <button className="btn btn-danger mt-5" onClick={nullFunction}>Cancel</button>
            </form>
        </div>
    );
}

export default InterviewForm;