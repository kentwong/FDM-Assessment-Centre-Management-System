import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function ViewResponse(props) {

    const [responses, setResponses] = useState([]);

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseById(props.match.params.id).then((res) => {
            setResponses(res.data);
        })
    }, [])

    return (
        <div className="custom-container">
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                        <thead>
                   
                            <tr>
                                <td> Name </td>
                                <td> Notes </td>
                                <td> Points </td>
                                <td> Interviwer </td>
                                <td> Question Type </td>  
                                <td> Question </td>
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
                                            <td> {response.interviewer.firstName} {response.interviewer.lastName} </td>
                                            <td> {response.question.questionType} </td>
                                            <td> {response.question.questionBody} </td>
                                        </tr>
                                )
                            }
                        </tbody>

                </table>    
                <a href={'/results'}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faBackward} color="#0d6efd" /></a>
            </div>
            </div>
            
        );
    }

export default ViewResponse;