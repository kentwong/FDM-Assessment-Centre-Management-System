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
        // console.log("candidateID: " + e.target.id + " - interviewType: " + e.target.name + " - interviewer: " + e.target.value)
    }

    const submitACHandler = (event) => {
        event.preventDefault()
        AssessmentCentreService.createAssessmentCentre(responses)
        props.history.push('/calender')
        window.location.reload(false);
    }

    return (
        <div className="custom-container">
            <h2>Finalise Assessment Centre:</h2><br/>
            <br/>
            <form onSubmit={submitACHandler}>
            <div className="container"><b>Candidates: </b><hr/>
                {candidates.map( (candidate) => 
                    <div key={candidate.id}>
                        <div className="row"><i>{candidate.firstName} {candidate.lastName}</i>
                            <div className="col" value={candidate.id}>
                                <b>Technical Interview</b><br/>
                                {/* id = candidate; name = interviewType; value = interviewer */}
                                <select id={(candidate.id).toString()} name="1" className="col" onChange={handleInterviewer}>
                                    {interviewers.map( (interviewer) => 
                                        <option value={(interviewer.id).toString()}>{interviewer.firstName} {interviewer.lastName}</option>
                                    )}
                                </select><br/>
                            </div>

                            <div className="col">
                                <b>HR Interview</b><br/>
                                <select id={(candidate.id).toString()} name="2" className="col" onChange={handleInterviewer} placeholder="Select">
                                    {interviewers.map( (interviewer) => 
                                        <option value={(interviewer.id).toString()}>{interviewer.firstName} {interviewer.lastName}</option>
                                    )}
                                </select><br/>
                            </div>

                            <div className="col">
                                <b>Sales Interview</b><br/>
                                <select id={(candidate.id).toString()} name="3" className="col" onChange={handleInterviewer}>
                                    {interviewers.map( (interviewer) => 
                                        <option value={(interviewer.id).toString()}>{interviewer.firstName} {interviewer.lastName}</option>
                                    )}
                                </select><br/>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )}
            </div>
            <input type="submit" className="btn btn-primary" value="Create Assessment Centre" />
            </form>
        </div>
    )
}

export default SetupAC