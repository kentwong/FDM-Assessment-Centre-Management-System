import React, { Component } from 'react';
import CandidateService from '../../services/CandidateService';

class InterviewFormSingleQuestion extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">Question</label>
                        <input type="text" className="form-control" id="firstName"></input>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Grade</label>
                        <input type="text" className="form-control" id="lastName"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">Question Type</label>
                        <input type="text" className="form-control" id="firstName"></input>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Points</label>
                        <input type="text" className="form-control" id="lastName"></input>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="notes" className="form-label">Notes </label>
                    <textarea className="form-control" id="notes" rows="3" ></textarea>
                </div>
                <hr />
            </div>
        );
    }
}

export default InterviewFormSingleQuestion;