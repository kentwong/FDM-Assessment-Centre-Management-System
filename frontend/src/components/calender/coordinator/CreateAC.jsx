import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import CandidateService from '../../../services/CandidateService'
import AssessmentCentreService from '../../../services/AssessmentCentreService'
import SetupAC from './SetupAC.jsx'

const CreateAC = (props) => {

    const storedCoordinator = localStorage.getItem('user')
    
    const [candidates, setCandidates] = useState([])
    const [staff, setStaff] = useState([])

    const [selectedCandidates, setSelectedCandidates] = useState([])
    const [selectedInterviewers, setSelectedInterviewers] = useState([])

    const today = new Date()
    const minDate = new Date(today.getFullYear(), today.getMonth(), (today.getDate() + 1))
    
    const [startDate, setDateStart] = useState(null)
    const [endDate, setDateEnd] = useState(null)
    const [usable, setUsable] = useState(false)

    // const [maxEndDate, setMaxEndDate] = useState(new Date((today.getFullYear()+100), today.getMonth(), today.getDate()))

    const startDateHandler = (e) => {
        console.log("START - " + e.target.value)
        setDateStart(e.target.value)

        if (!e.target.value){
            console.log("NULL - ")
            setUsable(false)
            setDateEnd(null)

            // setMaxEndDate(new Date((today.getFullYear()+100), today.getMonth(), today.getDate()))
        } else {
            console.log("NOT NULL - " + e.target.value)
            setUsable(true)
            setDateEnd(e.target.value)

            // setMaxEndDate(new Date(e.target.value.getFullYear(), e.target.value.getMonth(), e.target.value.getDate(), 11, 30))
        }
    }

    const endDateHandler = (e) => {
        console.log("END - " + e.target.value)
        setDateEnd(e.target.value)
    }

    const submitACHandler = (e) => {
        e.preventDefault()

        if (!startDate){
            window.location.reload(false);
        }

        let checkedBoxesCandidates = document.querySelectorAll('input[name=candidate]:checked');
        if (checkedBoxesCandidates.length < 1){
            window.location.reload(false);
        }
        let checkedBoxesInterviewers = document.querySelectorAll('input[name=interviewer]:checked');
        if (checkedBoxesInterviewers.length < 1){
            window.location.reload(false);
        }

        window.setTimeout(2000)
        AssessmentCentreService.sendIds(selectedCandidates, selectedInterviewers, startDate, endDate).then((res) => {
            props.history.push('/setupAC')
        })
    }

    useEffect(() => {
        AssessmentCentreService.getCandidates().then((res) => {
            // console.log(res.data)
            setCandidates(res.data)
        })
        AssessmentCentreService.getInterviewers().then((res) => {
            // console.log(res.data)
            setStaff(res.data)
        })
        AssessmentCentreService.sendCoordinatorID(storedCoordinator)
    }, [])

    
    return (
        <div className="custom-container mt-4">

            <form onSubmit={submitACHandler} className="row">
                <h2 className="mb-5">Create Assessment Centre</h2>

                <div className="row">
                    <div className="col-sm-1 fw-bold">Start Date: </div>
                    <div className="col-sm-5">
                        <DateTimePickerComponent placeholder="Choose a date and time" min={minDate} onChange={startDateHandler} format="dd/MM/yyyy hh:mm a" />
                    </div>

                    <div className="col-sm-1 fw-bold">End Date: </div>
                    <div className="col-sm-5">
                        <DateTimePickerComponent placeholder="Choose a date and time" min={startDate} value={endDate} enabled={usable} onChange={endDateHandler} format="dd/MM/yyyy hh:mm a" />
                    </div>
                </div><br/><br/>

                <div className="col">
                <b>Candidates: </b>
                    {candidates.map( (candidate) => 
                        <div key={candidate.id}>
                            <input type="checkbox" name="candidate" value={candidate.id} onChange={(e)=>setSelectedCandidates([...selectedCandidates, e.target.value])} />
                            <label for="candidate">&nbsp;{candidate.firstName} {candidate.lastName}</label><br/>
                        </div>
                    )}
                </div>

                <div className="col">
                <b>Interviewers: </b>
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


export default withRouter(CreateAC)
