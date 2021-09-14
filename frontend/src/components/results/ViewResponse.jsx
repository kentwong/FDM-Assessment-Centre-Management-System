import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function ViewResponse(props) {

    const [responses, setResponses] = useState([]);
    const [response, setResponse] = useState([]);
    const [grouped, setGrouped] = useState([]);

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
        AssessmentCentreResponseService.getAssessmentCentreResponseGroupedForId(props.match.params.id).then((res) => {
            setGrouped(res.data);
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-1">
                        General
                    </div>
                    <div className="col-md-1">
                        Technical
                    </div>
                    <div className="col-md-1">
                        Behavioural
                    </div>
                    <div className="col-md-1">
                        Curveball
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-1">
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
                    <div className="col-md-1">
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
                    <div className="col-md-1">
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
                    <div className="col-md-1">
                        <table className="table table-Striped table-bordered table-hover">
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.id}>
                                                <td> {response.curveballTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
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
            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                        <thead>
                   
                            <tr>
                                <td> Name </td>
                                <td> Question </td>
                                <td> General total </td>
                                <td> Technical total </td>
                                <td> Behavioural total </td>
                                <td> Curveball total </td>
                                <td> Stream </td>
                            </tr>
           
       
                        </thead>
                        <tbody>
                            {
                            grouped.map(
                                    group =>
                                        <tr key={group.id}>
                                            <td> {group.candidate.firstName} </td>
                                            <td> {group.question.questionBody} </td>
                                            <td> {group.generalTotal} </td>
                                            <td> {group.technicalTotal} </td>
                                            <td> {group.behaviouralTotal} </td>
                                            <td> {group.curveballTotal} </td>
                                            <td> {group.candidate.stream.streamName} </td>
                                        </tr>
                                )
                            }
                        </tbody>

                </table>     
            </div>
            </div>
            </div>
            
        );
    }

export default ViewResponse;