import React, { useState, useEffect } from 'react'
import StaffService from '../../../services/StaffService'
import CandidateService from '../../../services/CandidateService'

function CreateAC(props) {

    const storedCoordinator = localStorage.getItem('coordinator')
    let coordinator = JSON.parse(storedCoordinator)
    
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            console.log(res.data)
            setCandidates(res.data)
        })
    }, [])

    return (
        <div>
            <hr/>
            Assessment Centre coordinator: {coordinator.firstName} {coordinator.lastName}<br/>
            <br/>
            {console.log("CANDIDATES LENGTH " + candidates)}
            {candidates.map( candidate => {
                <div>
                    Candidate: {candidate.id}
                </div>
            })}
        </div>
    )
}

export default CreateAC