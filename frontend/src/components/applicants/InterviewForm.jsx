import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import InterviewFormSingleQuestion from './InterviewFormSingleQuestion';
import QuestionBank from './QuestionBank';

function InterviewForm({id}) {
    const [showQuestionBank, setShowQuestionBank] = useState(true);
    const toggleQuestionBank = () => {
        showQuestionBank ? setShowQuestionBank(false) : setShowQuestionBank(true);
    }
    const [questionBank, setQuestionBank] = useState([]);

    const [questionState, setQuestionState] = useState([]);
    const addQuestion = (id) => {
        if (questionState.filter(question => question[0].id == id).length == 0) {
            const tempQuestion = questionBank.filter(question => question.id == id);
            setQuestionState([...questionState, { ...tempQuestion }]);
        }
    };
    const deleteQuestion = (id) => {
        const tempQuestion = questionState.filter(question => question[0].id != id);
        setQuestionState(tempQuestion);
    };
    const handleQuestionChange = (e) => {
        e.preventDefault();
        questionState[questionState.findIndex((q => q[0].id == e.target.id))][0][e.target.name] = e.target.value;
        setQuestionState(questionState);
        console.log(questionState);
    };

    const clearAllQuestions = () => {
        setQuestionState([]);
    }

    const submitInterviewForm = () => {
        setQuestionState([]);
    }

    const nullFunction = e => {
        e.preventDefault();
    }

    useEffect(() => {
        let isMounted = true;
        AssessmentCentreResponseService.getAllQuestions().then((q) => {
            if (isMounted) setQuestionBank(q.data);
        }); console.log(localStorage.user);
        return () => { isMounted = false };
    }, []);

    return (
        <div className="custom-container">
            <form onSubmit={nullFunction}>
                <h2 className="mb-5">Assessment Centre - Interview Form</h2>

                <input type="submit" value={showQuestionBank ? 'Hide Question Bank' : 'Show Question Bank'} onClick={toggleQuestionBank} />
                {showQuestionBank ? <QuestionBank questionBank={questionBank} addQuestion={addQuestion} /> : null}

                <br /><br />

                {
                    questionState.map(question => {
                        return (
                            <InterviewFormSingleQuestion
                                key={question.id}
                                currQuestion={question[0]}
                                handleQuestionChange={handleQuestionChange}
                                deleteQuestion={deleteQuestion}
                            />
                        );
                    })
                }

                <br />

                <button type="submit" className="btn btn-success me-2 mt-5" onClick={submitInterviewForm}>Submit</button>
                <button className="btn btn-danger mt-5" onClick={clearAllQuestions}>Clear All</button>
            </form>
        </div>
    );
}

export default InterviewForm;