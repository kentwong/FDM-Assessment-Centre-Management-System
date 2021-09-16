import React, { useState, useEffect } from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

const SetupAC = (props) => {
    const [candidates, setCandidates] = useState([])
    const [interviewers, setInterviewers] = useState([])
    const [responses, setResponses] = useState([])

    useEffect(() => {
        AssessmentCentreService.getSelectedInterviewers().then((res) => {
            setInterviewers(res.data);
            let interviewerID = res.data[0].id.toString()

            const responsesSetup = []
            AssessmentCentreService.getSelectedCandidates().then((res) => {
                setCandidates(res.data);

                res.data.map(candidate => {
                    let technical = {
                        candidate: "0",
                        interviewType: "1",
                        interviewer: interviewerID,
                    }
                    let hr = {
                        candidate: "0",
                        interviewType: "2",
                        interviewer: interviewerID,
                    }
                    let sales = {
                        candidate: "0",
                        interviewType: "3",
                        interviewer: interviewerID,
                    }
                    // technical
                    technical.candidate = (candidate.id).toString()
                    responsesSetup.push(technical)
                    // hr
                    hr.candidate = (candidate.id).toString()
                    responsesSetup.push(hr)
                    // sales
                    sales.candidate = (candidate.id).toString()
                    responsesSetup.push(sales)
                })
            })

            setResponses(responsesSetup)
        })

    }, [])

    // handles dropdown interviewer changes
    const handleInterviewer = (e) => {
        const newResponses = []
        responses.map((response) => {
            if (e.target.name === response.interviewType && e.target.id === response.candidate){
                let newResponse = {
                    candidate: response.candidate,
                    interviewType: response.interviewType,
                    interviewer: e.target.value,
                }
                // response.interviewer = e.target.value
                // console.log(JSON.stringify(response))
                newResponses.push(newResponse)
            } else {
                newResponses.push(response)
            }
        })
        setResponses(newResponses)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        props.history.push('/calender')
        window.location.reload(false);
    }

    const submitACHandler = (e) => {
        e.preventDefault()
        AssessmentCentreService.createAssessmentCentre(responses)
        props.history.push('/calender')
        window.location.reload(false);
    }

    return (
        <div className="custom-container">
            <h2>Finalise Assessment Centre:</h2><hr/>

            <form onSubmit={submitACHandler}>

            <table className="table table-Striped table-bordered table-hover container">
                <thead>
                    <tr>
                        <th className="col-sm-3">NAME</th>
                        <th className="col-sm-3">STREAM</th>
                        <th className="col-sm-2">TECHNICAL INTERVIEW</th>
                        <th className="col-sm-2">HR INTERVIEW</th>
                        <th className="col-sm-2">SALES INTERVIEW</th>
                    </tr>
                </thead>

                <tbody>
                    {candidates.map( (candidate) => 
                    <tr key={candidate.id}>
                        {/* NAME */}
                        <td>{candidate.firstName} {candidate.lastName}</td>

                        {/* STREAM */}
                        <td>{candidate.streamName}</td>

                        {/* TECHINCAL */}
                        <td>
                            <select id={(candidate.id).toString()} name="1" onChange={handleInterviewer}>
                                {interviewers.map( (interviewer) => 
                                    <option value={(interviewer.id).toString()}>{interviewer.firstName} {interviewer.lastName}</option>
                                )}
                            </select>
                        </td>

                        {/* HR */}
                        <td>
                            <select id={(candidate.id).toString()} name="2" onChange={handleInterviewer} placeholder="Select">
                                {interviewers.map( (interviewer) => 
                                    <option value={(interviewer.id).toString()}>{interviewer.firstName} {interviewer.lastName}</option>
                                )}
                            </select>
                        </td>

                        {/* SALES */}
                        <td>
                            <select id={(candidate.id).toString()} name="3" onChange={handleInterviewer}>
                                {interviewers.map( (interviewer) => 
                                    <option value={(interviewer.id).toString()}>{interviewer.firstName} {interviewer.lastName}</option>
                                )}
                            </select>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

            <input type="button" className="btn btn-primary" value="Create Assessment Centre" data-bs-toggle="modal" data-bs-target="#confirmation" />
            
            {/* CONFIRMATION MODAL */}
            <div class="modal fade" id="confirmation" tabindex="-1" aria-labelledby="confirmationLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmationLabel">Create Assessment Centre?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={handleDelete} >Delete</button>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                    </div>
                </div>
            </div>

            </form>
        </div>
    )
}

export default SetupAC