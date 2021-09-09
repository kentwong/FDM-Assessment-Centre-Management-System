import React, { useState, useEffect } from 'react'
import CandidateService from '../../../services/CandidateService'
import StaffService from '../../../services/StaffService'

const CreateAC = (props) => {

    const storedCoordinator = localStorage.getItem('coordinator')
    let coordinator = JSON.parse(storedCoordinator)
    
    const [candidates, setCandidates] = useState([])
    const [staff, setStaff] = useState([])

    const [selectedCandidates, setSelectedCandidates] = useState([])
    const [selectedInterviewers, setSelectedInterviewers] = useState([])

    const submitACHandler = () => {
        alert("SUBMITTED CANDIDATES - " + selectedCandidates)
        alert("SUBMITTED INTERVIEWERS - " + selectedInterviewers)
    }

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
        <div className="custom-container">
            <b>Assessment Centre coordinator:</b> {coordinator.firstName} {coordinator.lastName}<br/>
            <br/>

            <form onSubmit={submitACHandler} className="row">
                <h2 className="mb-5">Create Assessment Centre</h2>

                <div className="col"><b>Candidates: </b>
                    {candidates.map( candidate => 
                        <div>
                            <input type="checkbox" name="candidate" value={candidate.id} onChange={(e)=>setSelectedCandidates([...selectedCandidates, e.target.value])} />
                            <label for="candidate">&nbsp;{candidate.firstName} {candidate.lastName}</label><br/>
                        </div>
                    )}
                </div>

                <div className="col"><b>Interviewers: </b>
                    {/* going to be an interviewer */}
                    {staff.map( interviewer => 
                        <div>
                            <input type="checkbox" name="interviewer" value={interviewer.id} onChange={(e)=>setSelectedInterviewers([...selectedInterviewers, e.target.value])} />
                            <label for="candidate">&nbsp;{interviewer.firstName} {interviewer.lastName}</label><br/>
                        </div>
                    )}
                </div>
                <input type="submit" value="Next" className="btn btn-success me-2 mt-5" />
            </form>
            
            

        </div>
    )
}

export default CreateAC