import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CandidateService from '../../services/CandidateService';

const InterviewFormSingleQuestion = ({ idx, questionState, handleQuestionChange, onDelete }) => {
    const questionId = 'question-${idx}';
    const pointsId = 'points-${idx}';
    const gradeId = 'grade-${idx}';

    return (
        <div key={questionId}>
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor={questionId} className="form-label">Question</label>
                    <input type="text" className="form-control" data-idx={idx} id={questionId} onChange={handleQuestionChange}></input>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">Question Type</label>
                    <input type="text" className="form-control" id="firstName"></input>
                </div>
                <div className="col-md-3">
                    <label htmlFor="lastName" className="form-label">Points</label>
                    <input type="text" className="form-control" id="lastName"></input>
                </div>
                <div className="col-md-3">
                    <label htmlFor="lastName" className="form-label">Grade</label>
                    <input type="text" className="form-control" id="lastName"></input>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes" rows="3" ></textarea>
            </div>
            <input type="button" value="Delete Question" onClick={() => onDelete(idx)} />
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