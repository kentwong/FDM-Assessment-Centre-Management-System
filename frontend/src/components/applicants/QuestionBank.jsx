import React from 'react'
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';

const QuestionBank = ({ questionBank, addQuestion }) => {
    return (
        <div>
            <p>Questions for Interviewer - { localStorage.getItem('name') } </p>
            { questionBank.length > 0 ?
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="">ID</th>
                            <th className="">Question</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questionBank.map(
                                question =>
                                    <tr key={question.id}>
                                        <td> {question.id} </td>
                                        <td> {question.questionBody} </td>
                                        <td> <input type='button' className='btn btn-primary' value='Add to Interview' onClick={() => addQuestion(question.id)} /> </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            : <p>{ localStorage.getItem('name') } has no questions assigned for this candidate.</p>
             }
        </div>
    )
}

export default QuestionBank;
