import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import InterviewFormSingleQuestion from './InterviewFormSingleQuestion';
import QuestionBank from './QuestionBank';

function InterviewForm(props) {

    const [showQuestionBank, setShowQuestionBank] = useState(true);
    const toggleQuestionBank = () => {
        showQuestionBank ? setShowQuestionBank(false) : setShowQuestionBank(true);
    }
    const [questionBank, setQuestionBank] = useState([]);

    const blankQuestion = { questionText: '', questionType: '', points: '', grade: '' }
    const [questionState, setQuestionState] = useState([{ ...blankQuestion }]);
    const addQuestion = () => {
        setQuestionState([...questionState, { ...blankQuestion }]);
        console.log(questionState);
    };
    const handleQuestionChange = (e) => {

    };

    const submitInterviewForm = e => {
        e.preventDefault();
    }

    const nullFunction = e => {
        e.preventDefault();
    }

    useEffect(() => {
        AssessmentCentreResponseService.getAllQuestions().then((q) => {
            setQuestionBank(q.data);
        });
    });

    return (
        <div className="custom-container">
            <form onSubmit={submitInterviewForm}>
                <h2 className="mb-5">Assessment Centre - Interview Form</h2>

                <input type="submit" value={showQuestionBank ? 'Hide Question Bank' : 'Show Question Bank'} onClick={toggleQuestionBank} />
                {showQuestionBank ? <QuestionBank /> : null}

                <br /><br />

                {
                    questionState.map((val, idx) => {
                        return (
                            <InterviewFormSingleQuestion
                                key={'question-{idx}'}
                                idx={idx}
                                questionState={questionState}
                                handleQuestionChange={handleQuestionChange}
                            />
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