import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';

function AssesmentCentreResponses(props) {

    const [responses, setResponses] = useState([]);

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponses().then((res) => {
            setResponses(res.data);
        })
    }, [])

    return (
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                   
                                    <tr>
                                        <td>Name</td>
                                        <td> Notes </td>
                                        <td> General </td>
                                        <td> Technical </td>
                                        <td> Behavoural </td>
                                        <td> Curveball </td>                                        
                                        <td> Question type</td>
                                        <td> Points</td>
                                    </tr>
                            
                        
                    </thead>
                    <tbody>
                        {
                            responses.map(
                                response =>
                                    <tr key={response.id}>
                                        <td> {response.candidate.firstName} {response.candidate.lastName}</td>
                                        <td> {response.notes} </td>
                                        <td> {response.points} </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td> {response.question.questionType} </td>
                                        <td> {response.points} </td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
    );
}

export default AssesmentCentreResponses;