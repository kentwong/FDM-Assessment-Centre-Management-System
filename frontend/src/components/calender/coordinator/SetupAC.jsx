import React, { useState, useEffect } from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

const SetupAC = (props) => {
    const [candidates, setCandidates] = useState([])
    const [interviewers, setInterviewers] = useState([])

    useEffect(() => {
        AssessmentCentreService.getSelectedCandidates().then((res) => {
            setCandidates(res.data);
        })

        AssessmentCentreService.getSelectedInterviewers().then((res) => {
            setInterviewers(res.data);
        })
    }, [])


    return (
        <div className="custom-container">
            <b>Finalise Assessment Centre:</b><br/>
            <form>
            

            <br/>
            <div className="container"><b>Candidates: </b><hr/>
                {candidates.map( (candidate) => 
                    <div key={candidate.id}>
                        <div className="row"><i>{candidate.firstName} {candidate.lastName}</i>
                            <div className="col">
                                <b>Technical Interview</b><br/>
                                <select name="acInterviewers" className="col">
                                {interviewers.map( (interviewer) => 
                                    <option value={interviewer.id}>{interviewer.firstName} {interviewer.lastName}</option>
                                )}
                                </select><br/>
                            </div>

                            <div className="col">
                                <b>HR Interview</b><br/>
                                <select name="acInterviewers" className="col">
                                {interviewers.map( (interviewer) => 
                                    <option value={interviewer.id}>{interviewer.firstName} {interviewer.lastName}</option>
                                )}
                                </select><br/>
                            </div>

                            <div className="col">
                                <b>Sales Interview</b><br/>
                                <select name="acInterviewers" className="col">
                                {interviewers.map( (interviewer) => 
                                    <option value={interviewer.id}>{interviewer.firstName} {interviewer.lastName}</option>
                                )}
                                </select><br/>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )}
            </div>
            </form>
        </div>
    )
}

export default SetupAC