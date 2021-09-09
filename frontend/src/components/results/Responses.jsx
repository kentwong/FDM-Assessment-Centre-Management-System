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
                                        <td> Notes </td>
                                        <td> Name </td>
                                        <td> Points </td>
                                        <td> Question type</td>
                                    </tr>
                            
                        
                    </thead>
                    <tbody>
                        {
                            responses.map(
                                response =>
                                    <tr key={response.id}>
                                        <td> {response.id} </td>
                                        <td> {response.notes} </td>
                                        <td> {response.candidate.firstName} {response.candidate.lastName}</td>
                                        <td> {response.points} </td>
                                        <td> {response.questionType} </td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
    );
}

export default Responses;