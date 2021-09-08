import React, { useState, useEffect } from 'react'
import CandidateService from '../../../services/CandidateService'
import StaffService from '../../../services/StaffService'

function CreateAC(props) {

    const storedCoordinator = localStorage.getItem('coordinator')
    let coordinator = JSON.parse(storedCoordinator)
    
    const [candidates, setCandidates] = useState([])
    const [staff, setStaff] = useState([])

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            console.log(res.data)
            setCandidates(res.data)
        })

        StaffService.getStaff().then((res) => {
            console.log(res.data)
            setStaff(res.data)
        })
    }, [])

    return (
        <div>
            <hr/>
            <b>Assessment Centre coordinator:</b> {coordinator.firstName} {coordinator.lastName}<br/>
            <br/>
            {candidates.map( candidate => 
                <div>
                    <input type="checkbox" />
                    <b>Candidate:</b> {candidate.firstName} {candidate.lastName}
                </div>
            )}
            <br/>
            {/* going to be an interviewer */}
            {staff.map( member => 
                <div>
                    <input type="checkbox" />
                    <b>Interviewer:</b> {member.firstName} {member.lastName}
                </div>
            )}
            <br/>
            <div>
                <label for="interviewTypes">Choose Interview Type:</label><br/>
                <select name="interviewTypes">
                    <option value="General">General</option>
                    <option value="Technical">Technical</option>
                    <option value="Behavioural">Behavioural</option>
                    <option value="Curveball">Curveball</option>
                </select>
            </div>

        </div>
    )
}

export default CreateAC