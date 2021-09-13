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

    const [questionState, setQuestionState] = useState([]);
    const addQuestion = (id) => {
        const tempQuestion = questionBank.filter(question => question.id == id);
        console.log(tempQuestion);
        setQuestionState([...questionState,  { ...tempQuestion } ]);
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
        let isMounted = true;
        AssessmentCentreResponseService.getAllQuestions().then((q) => {
            if (isMounted) setQuestionBank(q.data);
        });
        return () => { isMounted = false };
    }, []);

    return (
        <div className="custom-container">
            <form onSubmit={submitInterviewForm}>
                <h2 className="mb-5">Assessment Centre - Interview Form</h2>

                <input type="submit" value={showQuestionBank ? 'Hide Question Bank' : 'Show Question Bank'} onClick={toggleQuestionBank} />
                {showQuestionBank ? <QuestionBank questionBank={questionBank} addQuestion={addQuestion} /> : null}

                <br /><br />

                {
                    questionState.map(question => {
                        return (
                            <InterviewFormSingleQuestion
                                questionState={questionState}
                                handleQuestionChange={handleQuestionChange}
                            />
                        );
                    })
                }

                <br />

                <button type="submit" className="btn btn-success me-2 mt-5">Submit</button>
                <button className="btn btn-danger mt-5" onClick={nullFunction}>Cancel</button>
            </form>
        </div>
    );
}

export default InterviewForm;