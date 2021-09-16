import React, { useState, useEffect } from 'react';
import AssessmentCentreResponseService from '../../services/AssessmentCentreResponseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function ViewResponse(props) {

    const [response, setResponse] = useState([]);
    const [generalResponses, setGeneralResponses] = useState([]);
    const [technicalResponses, setTechnicalResponses] = useState([]);
    const [behaviouralResponses, setBehaviouralResponses] = useState([]);
    
    const firstGeneralRow = generalResponses.slice(0,1);
    const secondGeneralRow = generalResponses.slice(1,2);
    const thirdGeneralRow = generalResponses.slice(2,3);
    const fourthGeneralRow = generalResponses.slice(3,4);

    const firstTechnicalRow = technicalResponses.slice(0,1);
    const secondTechnicalRow = technicalResponses.slice(1,2);
    const thirdTechnicalRow = technicalResponses.slice(2,3);
    const fourthTechnicalRow = technicalResponses.slice(3,4);

    const firstBehaviouralRow = behaviouralResponses.slice(0,1);
    const secondBehaviouralRow = behaviouralResponses.slice(1,2);
    const thirdBehaviouralRow = behaviouralResponses.slice(2,3);
    const fourthBehaviouralRow = behaviouralResponses.slice(3,4);

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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
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
                                            <tr key={response.question.questionBody}>
                                                <td> {response.behaviouralTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <h2 className="text-center">General Interview</h2>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                firstGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Question: {generalResponse.question.questionBody} </td>
                                                <td> Grade: {generalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                firstGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Interviewer: {generalResponse.interviewer.firstName} {generalResponse.interviewer.lastName} </td>
                                                <td> Points: {generalResponse.general} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                firstGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <p> Notes: {generalResponse.notes} </p> 
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                secondGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Question: {generalResponse.question.questionBody} </td>
                                                <td> Grade: {generalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                secondGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Interviewer: {generalResponse.interviewer.firstName} {generalResponse.interviewer.lastName} </td>
                                                <td> Points: {generalResponse.general} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                secondGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <p> Notes: {generalResponse.notes} </p>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                thirdGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Question: {generalResponse.question.questionBody} </td>
                                                <td> Grade: {generalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                thirdGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Interviewer: {generalResponse.interviewer.firstName} {generalResponse.interviewer.lastName} </td>
                                                <td> Points: {generalResponse.general} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                thirdGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <p> Notes: {generalResponse.notes} </p>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                fourthGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Question: {generalResponse.question.questionBody} </td>
                                                <td> Grade: {generalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                fourthGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <td> Interviewer: {generalResponse.interviewer.firstName} {generalResponse.interviewer.lastName} </td>
                                                <td> Points: {generalResponse.general} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <thead>
                                {
                                fourthGeneralRow.map(
                                        generalResponse =>
                                            <tr key={generalResponse.question.questionBody}>
                                                <p> Notes: {generalResponse.notes} </p> 
                                            </tr>
                                    )
                                }
                            </thead>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.question.questionBody}>
                                                <td> General Interview Total: {response.generalTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                
                <div className="row">
                    <h2 className="text-center">Technical Interview</h2>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                firstTechnicalRow.map(
                                        technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Question: {technicalResponse.question.questionBody} </td>
                                                <td> Grade: {technicalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                firstTechnicalRow.map(
                                        technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Interviewer: {technicalResponse.interviewer.firstName} {technicalResponse.interviewer.lastName} </td>
                                                <td> Points: {technicalResponse.technical} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                firstTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <p> Notes: {technicalResponse.notes} </p> 
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                secondTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Question: {technicalResponse.question.questionBody} </td>
                                                <td> Grade: {technicalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                secondTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Interviewer: {technicalResponse.interviewer.firstName} {technicalResponse.interviewer.lastName} </td>
                                                <td> Points: {technicalResponse.technical} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                secondTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <p> Notes: {technicalResponse.notes} </p>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                thirdTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Question: {technicalResponse.question.questionBody} </td>
                                                <td> Grade: {technicalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                thirdTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Interviewer: {technicalResponse.interviewer.firstName} {technicalResponse.interviewer.lastName} </td>
                                                <td> Points: {technicalResponse.technical} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                thirdTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <p> Notes: {technicalResponse.notes} </p>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                fourthTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Question: {technicalResponse.question.questionBody} </td>
                                                <td> Grade: {technicalResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                fourthTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <td> Interviewer: {technicalResponse.interviewer.firstName} {technicalResponse.interviewer.lastName} </td>
                                                <td> Points: {technicalResponse.technical} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <thead>
                                {
                                fourthTechnicalRow.map(
                                    technicalResponse =>
                                            <tr key={technicalResponse.question.questionBody}>
                                                <p> Notes: {technicalResponse.notes} </p> 
                                            </tr>
                                    )
                                }
                            </thead>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.question.questionBody}>
                                                <td> Technical Interview Total: {response.technicalTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="row">
                    <h2 className="text-center">Behavioural Interview</h2>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                firstBehaviouralRow.map(
                                        behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Question: {behaviouralResponse.question.questionBody} </td>
                                                <td> Grade: {behaviouralResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                firstBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Interviewer: {behaviouralResponse.interviewer.firstName} {behaviouralResponse.interviewer.lastName} </td>
                                                <td> Points: {behaviouralResponse.behavioural} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                firstBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <p> Notes: {behaviouralResponse.notes} </p> 
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                secondBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Question: {behaviouralResponse.question.questionBody} </td>
                                                <td> Grade: {behaviouralResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                secondBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Interviewer: {behaviouralResponse.interviewer.firstName} {behaviouralResponse.interviewer.lastName} </td>
                                                <td> Points: {behaviouralResponse.behavioural} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                secondBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <p> Notes: {behaviouralResponse.notes} </p>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                thirdBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Question: {behaviouralResponse.question.questionBody} </td>
                                                <td> Grade: {behaviouralResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                thirdBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Interviewer: {behaviouralResponse.interviewer.firstName} {behaviouralResponse.interviewer.lastName} </td>
                                                <td> Points: {behaviouralResponse.behavioural} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tbody>
                                {
                                thirdBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <p> Notes: {behaviouralResponse.notes} </p>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <thead>
                                {
                                fourthBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Question: {behaviouralResponse.question.questionBody} </td>
                                                <td> Grade: {behaviouralResponse.grade} </td>
                                            </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {
                                fourthBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <td> Interviewer: {behaviouralResponse.interviewer.firstName} {behaviouralResponse.interviewer.lastName} </td>
                                                <td> Points: {behaviouralResponse.behavioural} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <thead>
                                {
                                fourthBehaviouralRow.map(
                                    behaviouralResponse =>
                                            <tr key={behaviouralResponse.question.questionBody}>
                                                <p> Notes: {behaviouralResponse.notes} </p> 
                                            </tr>
                                    )
                                }
                            </thead>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table table-Striped table-bordered table-hover" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                            <tbody>
                                {
                                response.map(
                                        response =>
                                            <tr key={response.question.questionBody}>
                                                <td> Behavioural Interview Total: {response.behaviouralTotal} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
            </div>
            </div>
            
        );
    }

export default ViewResponse;