import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function ViewResponse(props) {

    const [responses, setResponses] = useState([]);
    const [response, setResponse] = useState([]);
    const [generalResponses, setGeneralResponses] = useState([]);
    const [technicalResponses, setTechnicalResponses] = useState([]);
    const [behaviouralResponses, setBehaviouralResponses] = useState([]);

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseById(props.match.params.id).then((res) => {
            setResponses(res.data);
        })
    }, [])

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGroupedOneForId(props.match.params.id).then((res) => {
            setResponse(res.data);
        })
    }, [])

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGroupedForIdOnlyGeneral(props.match.params.id).then((res) => {
            setGeneralResponses(res.data);
        })
    }, [])

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGroupedForIdOnlyTechnical(props.match.params.id).then((res) => {
            setTechnicalResponses(res.data);
        })
    }, [])

    useEffect(() => {
        AssessmentCentreResponseService.getAssessmentCentreResponseGroupedForIdOnlyBehavioural(props.match.params.id).then((res) => {
            setBehaviouralResponses(res.data);
        })
    }, [])
    
    return (
        <div className="custom-container">
            <h1>AC Results</h1>
            <div>
                <a href={'/results'}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faBackward} color="#0d6efd" /></a>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> <a href={'/applicant/edit/' + response.candidate.id}>{response.candidate.firstName} {response.candidate.lastName} </a></td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> {response.candidate.stream.streamName} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <h2>Overall Results</h2>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> Total: {response.overall} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> DATE </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> Location? </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2">
                        General
                    </div>
                    <div className="col-md-2">
                        Technical
                    </div>
                    <div className="col-md-2">
                        Behavioural
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> Degree? </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> {response.candidate.university} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> {response.generalTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> {response.technicalTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> {response.behaviouralTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <h2 className="text-center">Generals</h2>
                        <table className="table table-Striped table-bordered table-hover">
                                <thead>
                        
                                    <tr>
                                        <td> Question </td>
                                        <td> Notes </td>
                                        <td> Grade </td>
                                        <td> Points </td>
                                        <td> Question Type </td>  
                                        <td> Interviewer </td>
                                    </tr>
                
            
                                </thead>
                                <tbody>
                                    {
                                    generalResponses.map(
                                            generalResponse =>
                                                <tr key={generalResponse.id}>
                                                    <td> {generalResponse.question.questionBody} </td>
                                                    <td> {generalResponse.notes} </td>
                                                    <td> {generalResponse.grade} </td>
                                                    <td> {generalResponse.general} </td>
                                                    <td> {generalResponse.question.questionType} </td>
                                                    <td> {generalResponse.interviewer.firstName} {generalResponse.interviewer.lastName} </td>
                                                </tr>
                                        )
                                    }
                                </tbody>

                        </table> 
                </div>
                
                <div className="row">
                    <h2 className="text-center">Technicals</h2>
                        <table className="table table-Striped table-bordered table-hover">
                                <thead>
                        
                                    <tr>
                                        <td> Question </td>
                                        <td> Notes </td>
                                        <td> Grade </td>
                                        <td> Points </td>
                                        <td> Question Type </td>  
                                        <td> Interviewer </td>
                                    </tr>
                
            
                                </thead>
                                <tbody>
                                    {
                                    technicalResponses.map(
                                            technicalResponse =>
                                                <tr key={technicalResponse.id}>
                                                    <td> {technicalResponse.question.questionBody} </td>
                                                    <td> {technicalResponse.notes} </td>
                                                    <td> {technicalResponse.grade} </td>
                                                    <td> {technicalResponse.technical} </td>
                                                    <td> {technicalResponse.question.questionType} </td>
                                                    <td> {technicalResponse.interviewer.firstName} {technicalResponse.interviewer.lastName} </td>
                                                </tr>
                                        )
                                    }
                                </tbody>

                        </table> 
                </div>
                
                <div className="row">
                    <h2 className="text-center">Behaviourals</h2>
                        <table className="table table-Striped table-bordered table-hover">
                                <thead>
                        
                                    <tr>
                                        <td> Question </td>
                                        <td> Notes </td>
                                        <td> Grade </td>
                                        <td> Points </td>
                                        <td> Question Type </td>  
                                        <td> Interviewer </td>
                                    </tr>
                
            
                                </thead>
                                <tbody>
                                    {
                                    behaviouralResponses.map(
                                            behaviouralResponse =>
                                                <tr key={behaviouralResponse.id}>
                                                    <td> {behaviouralResponse.question.questionBody} </td>
                                                    <td> {behaviouralResponse.notes} </td>
                                                    <td> {behaviouralResponse.grade} </td>
                                                    <td> {behaviouralResponse.behavioural} </td>
                                                    <td> {behaviouralResponse.question.questionType} </td>
                                                    <td> {behaviouralResponse.interviewer.firstName} {behaviouralResponse.interviewer.lastName} </td>
                                                </tr>
                                        )
                                    }
                                </tbody>

                        </table> 
                </div>
                

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
            </div>
            </div>
            
        );
    }

export default ViewResponse;