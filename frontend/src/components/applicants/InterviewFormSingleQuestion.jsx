import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CandidateService from '../../services/CandidateService';

const InterviewFormSingleQuestion = ({ questionState, handleQuestionChange }) => {
    const questionId = 'question-3333333';
    const pointsId = 'points-${idx}';
    const gradeId = 'grade-${idx}';

    return (
        <div key={questionId}>
            <div className="row mb-3">
                <div className="col-md-10">
                    <label htmlFor={questionId} className="form-label">Question</label>
                    <textarea className="form-control" id="questionDisplay" rows="2" ></textarea>
                </div>
                <div className="col-md-2">
                        <label htmlFor="lastName" className="form-label">Points</label>
                        <input type="number" className="form-control" id="lastName"></input>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes" rows="3" ></textarea>
            </div>
            <hr />
        </div>
    );

}

InterviewFormSingleQuestion.propTypes = {
    idx: PropTypes.number,
    questionState: PropTypes.array,
    handleQuestionChange: PropTypes.func,
}

export default InterviewFormSingleQuestion;