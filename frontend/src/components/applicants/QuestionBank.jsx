import React from 'react'
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';

const QuestionBank = ({ questionBank, addQuestion }) => {
    return (
        <div>
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
                                        <td> <input type='button' value='Add to Interview' onClick={() => addQuestion(question.id)} /> </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QuestionBank;
