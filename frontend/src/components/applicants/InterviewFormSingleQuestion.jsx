import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CandidateService from '../../services/CandidateService';

const InterviewFormSingleQuestion = ({ currQuestion, handleQuestionChange, deleteQuestion }) => {
    const temp = 0;
    return (
        <div key={currQuestion.id}>
            <div className="row mb-3">
                <div className="col-md-10">
                    <label className="form-label">Question</label>
                    <textarea className="form-control" id="questionDisplay" rows="3" value={currQuestion.questionBody} readOnly ></textarea>
                </div>
                <div className="col-md-2">
                        <label htmlFor="lastName" className="form-label" >Points (/10)</label>
                        <input type="number" min="0" max="10" name="points" className="form-control" id={currQuestion.id} onChange={handleQuestionChange} ></input>
                        <br />
                        <input type="button" className="btn btn-danger" value="Delete Question" onClick={() => deleteQuestion(currQuestion.id)}></input>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea name="notes" className="form-control" id={currQuestion.id} rows="3" onChange={handleQuestionChange} ></textarea>
            </div>
            <hr />
        </div>
    );

}

export default InterviewFormSingleQuestion;