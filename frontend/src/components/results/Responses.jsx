import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';

function Responses(props) {

    const [responses, setResponses] = useState([]);

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGrouped().then((res) => {
            setResponses(res.data);
        })
    }, [])

    return (
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                   
                                    <tr>
                                        <td>Id</td>
                                        <td> Name </td>
                                        <td> Stream </td>
                                        <td> Aptitude </td>
                                        <td> General </td>
                                        <td> Technical </td>
                                        <td> Behavioural </td>
                                        <td> Curveball </td>  
                                        <td> Overall </td>
                                        <td> Question type</td>
                                    </tr>
                            
                        
                    </thead>
                    <tbody>
                        {
                            responses.map(
                                response =>
                                    <tr key={response.candidate.id}>
                                        <td> {response.candidate.id} </td>
                                        <td> {response.candidate.firstName} {response.candidate.lastName}</td>
                                        <td> {response.candidate.stream.streamName} </td>
                                        <td> {response.candidate.aptitudeScore} </td>
                                        <td> {response.general} </td>
                                        <td> {response.technical} </td>
                                        <td> {response.behavioural} </td>
                                        <td> {response.curveball} </td>
                                        <td> {response.overall} </td>
                                        <td> {response.question.questionType} </td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
    );
}

export default Responses;