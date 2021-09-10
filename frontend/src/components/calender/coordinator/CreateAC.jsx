import React, { useState, useEffect } from 'react'
import CandidateService from '../../../services/CandidateService'
import AssessmentCentreService from '../../../services/AssessmentCentreService'
import SetupAC from './SetupAC.jsx'

const CreateAC = (props) => {

    const storedCoordinator = localStorage.getItem('user')
    let coordinator = JSON.parse(storedCoordinator)
    
    const [candidates, setCandidates] = useState([])
    const [staff, setStaff] = useState([])

    const [selectedCandidates, setSelectedCandidates] = useState([])
    const [selectedInterviewers, setSelectedInterviewers] = useState([])

    const submitACHandler = (e) => {
        e.preventDefault()
        // console.log("SUBMITTED CANDIDATES - " + selectedCandidates);
        // console.log("SUBMITTED INTERVIEWERS - " + selectedInterviewers);
        AssessmentCentreService.sendIds(selectedCandidates, selectedInterviewers).then((res) => {
            alert("FIRST CHECKPOINT")
            alert("SECOND CHECKPOINT")
        })
    }

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            // console.log(res.data)
            setCandidates(res.data)
        })

        AssessmentCentreService.getInterviewers().then((res) => {
            // console.log(res.data)
            setStaff(res.data)
        })

        AssessmentCentreService.sendCoordinatorID(coordinator.id)
    }, [])

    
    return (
        <div className="custom-container">
            <b>Assessment Centre coordinator:</b> {coordinator.firstName} {coordinator.lastName}<br/>
            <br/>

            <form onSubmit={submitACHandler} className="row">
                <h2 className="mb-5">Create Assessment Centre</h2>

                <div className="col"><b>Candidates: </b>
                    {candidates.map( (candidate) => 
                        <div key={candidate.id}>
                            <input type="checkbox" name="candidate" value={candidate.id} onChange={(e)=>setSelectedCandidates([...selectedCandidates, e.target.value])} />
                            <label for="candidate">&nbsp;{candidate.firstName} {candidate.lastName}</label><br/>
                        </div>
                    )}
                </div>

                <div className="col"><b>Interviewers: </b>
                    {staff.map( interviewer => 
                        <div key={interviewer.id}>
                            <input type="checkbox" name="interviewer" value={interviewer.id} onChange={(e)=>setSelectedInterviewers([...selectedInterviewers, e.target.value])} />
                            <label for="candidate">&nbsp;{interviewer.firstName} {interviewer.lastName}</label><br/>
                        </div>
                    )}
                </div>
                <button type="submit" className="btn btn-success me-2 mt-5">Next</button>

            </form>
            
            

        </div>
    )
}

export default CreateAC