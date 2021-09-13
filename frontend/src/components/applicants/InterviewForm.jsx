import React, { useState } from 'react';
import CandidateService from '../../services/CandidateService';
import InterviewFormSingleQuestion from './InterviewFormSingleQuestion';

function InterviewForm(props) {

    const blankQuestion = { questionText: '', questionType: '', points: '', grade: '' }
    const [questionState, setQuestionState] = useState([{ ...blankQuestion }]);

    const addQuestion = () => {
        setQuestionState([...questionState, { ...blankQuestion }]);
        console.log(questionState);
    };

    const handleQuestionChange = (e) => {
        
    };

    const deleteQuestion = (idx) => {
        setQuestionState(questionState.splice(idx, 1));
        console.log(questionState);
    }

    const submitInterviewForm = e => {
        e.preventDefault();
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

                {
                    questionState.map((val, idx) => {
                        return (
                            <InterviewFormSingleQuestion
                                key={'question-${idx}'}
                                idx={idx}
                                questionState={questionState}
                                handleQuestionChange={handleQuestionChange}
                                onDelete={deleteQuestion} /> 
                        ); console.log(idx);
                    })
                }

                <input type="button" value="Add New Question" onClick={addQuestion} />

                <br />

                <button type="submit" className="btn btn-success me-2 mt-5">Submit</button>
                <button className="btn btn-danger mt-5" onClick={nullFunction}>Cancel</button>
            </form>
        </div>
    );
}

export default InterviewForm;