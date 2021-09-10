import React, { useState, useEffect } from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

const SetupAC = (props) => {
    const [candidates, setCandidates] = useState([])
    const [interviewers, setInterviewers] = useState([])

    // useEffect(() => {
    //     AssessmentCentreService.getSelectedCandidates().then((res) => {
    //         setCandidates(res.data);
    //     })
    // }, [])


    return (
        <div className="custom-container">
            <b>Finalise Assessment Centre:</b><br/>
            <form>
            <label for="interviewTypes">Choose Interview Type:</label><br/>
            <select name="interviewTypes">
                <option value="General">General</option>
                <option value="Technical">Technical</option>
                <option value="Behavioural">Behavioural</option>
                <option value="Curveball">Curveball</option>
            </select>
{/* 
            <div className="col"><b>Candidates: </b>
                    {candidates.map( (candidate) => 
                        <div key={candidate.id}>
                            Candidate {candidate.firstName} {candidate.lastName}<br/>
                        </div>
                    )}
                </div> */}

                

            </form>
        </div>
    )
}

export default SetupAC