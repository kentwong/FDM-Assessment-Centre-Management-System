import React, { useState } from 'react';
import CandidateService from '../../services/CandidateService';
import InterviewFormSingleQuestion from './InterviewFormSingleQuestion';

import REMOVEBEFORESUBMISSIONService from '../../services/REMOVEBEFORESUBMISSIONService';

function InterviewForm(props) {

    const blankQuestion = { questionText: '', questionType: '', points: '', grade: '' }
    const [questionState, setQuestionState] = useState([{ ...blankQuestion }]);

    const addQuestion = () => {
        setQuestionState([...questionState, { ...blankQuestion }]);
    };

    const handleQuestionChange = (e) => {
        const updatedQuestions = [...questionState];
        updatedQuestions[e.target.dataset.idx][e.target.className] = e.target.value;
        setQuestionState(updatedQuestions);         REMOVEBEFORESUBMISSIONService.w();
    };

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

                {
                    questionState.map((val, idx) => {
                        return (
                            <InterviewFormSingleQuestion
                                key={'question-${idx}'}
                                idx={idx}
                                questionState={questionState}
                                handleQuestionChange={handleQuestionChange} />
                        );
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