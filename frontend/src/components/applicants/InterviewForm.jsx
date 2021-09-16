import React, { useState, useEffect, componentDidMount } from 'react';
import CandidateService from '../../services/CandidateService';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import InterviewFormSingleQuestion from './InterviewFormSingleQuestion';
import QuestionBank from './QuestionBank';

function InterviewForm({ id }) {
    const interviewerId = localStorage.getItem('user');

    const [showQuestionBank, setShowQuestionBank] = useState(true);
    const toggleQuestionBank = () => {
        showQuestionBank ? setShowQuestionBank(false) : setShowQuestionBank(true);
    }
    const [questionBank, setQuestionBank] = useState([]);
    const [acResponses, setAcResponses] = useState([]);

    const [questionState, setQuestionState] = useState([]);
    const addQuestion = (id) => {
        if (questionState.filter(question => question[0].id == id).length == 0 && questionState.length < 4) {
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
    };

    const clearAllQuestions = () => {
        setQuestionState([]);
    }

    const submitInterviewForm = () => {
        questionState.forEach(q => {
            let question = {
                notes: q[0].notes,
                points: q[0].points,
                candidate_id: id,
                fk_interviewer_id: interviewerId,
                question_id: q[0].id
            }
            console.log(question);
            AssessmentCentreResponseService.updateAssessmentCentreResponse(question, q[0].acResponseId);
        });

        setQuestionState([]);
    }

    const nullFunction = e => {
        e.preventDefault();
    }

    useEffect(() => {
        AssessmentCentreResponseService.getResponsesByCandidateInterviewer(id, interviewerId).then( res => {
            const tempRes = res.data.filter(e => (e.candidate.id == id && e.interviewer.id == interviewerId)); 
            setAcResponses(tempRes); console.log(acResponses);

            AssessmentCentreResponseService.getAllQuestions().then(q => { 
                const tempQuestions = q.data.filter(e => acResponses.filter(i => i.question.id == e.id).length > 0);
                acResponses.forEach(e => tempQuestions[tempQuestions.findIndex(i => i.id == e.question.id)].acResponseId = e.id);
                setQuestionBank(tempQuestions); 
            }); 
        });
    }, [acResponses]);

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