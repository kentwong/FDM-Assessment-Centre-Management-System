import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import CandidateService from '../../../services/CandidateService'
import AssessmentCentreService from '../../../services/AssessmentCentreService'
import SetupAC from './SetupAC.jsx'
import SearchBar from '../../../components/applicants/SearchBar'
import ViewAssessmentCentres from '../coordinator/ViewAssessmentCentres';

const CreateAC = (props) => {

    const [missingParams, setMissingParams] = useState(false)

    const storedCoordinator = localStorage.getItem('user')
    const excludeSearchColumns = ['id', 'aptitude_score', 'cv', 'date_of_birth', 'email', 'notes', 'phone_number', 'status', 'university', 'address', 'recruiter'];
    
    const [candidates, setCandidates] = useState([])
    const [interviewers, setinterviewers] = useState([])

    const [selectedCandidates, setSelectedCandidates] = useState([])
    const [selectedInterviewers, setSelectedInterviewers] = useState([])

    const today = new Date()
    const minDate = new Date(today.getFullYear(), today.getMonth(), (today.getDate() + 1))
    
    const [startDate, setDateStart] = useState(null)
    const [endDate, setDateEnd] = useState(null)
    const [usable, setUsable] = useState(false)

    const startDateHandler = (e) => {
        console.log("START - " + e.target.value)
        setDateStart(e.target.value)

        if (!e.target.value){
            setUsable(false)
            setDateEnd(null)
        } else {
            setUsable(true)
            setDateEnd(e.target.value)
        }
    }

    const endDateHandler = (e) => {
        console.log("END - " + e.target.value)
        setDateEnd(e.target.value)
    }

    const handleCandidateSearch = (search) => {
        AssessmentCentreService.getCandidates().then((res) => {
            let filtered = res.data
                .filter(candidate => {
                    return Object.keys(candidate).some(key => {
                        return excludeSearchColumns.includes(key) ? false : candidate[key].toString().toLowerCase().includes(search.toLowerCase().trim())
                    })
                });
            setCandidates(filtered);
        })
    }

    const handleInterviewerSearch = (search) => {
        AssessmentCentreService.getInterviewers().then((res) => {
            let filtered = res.data
                .filter(interviewer => {
                    return Object.keys(interviewer).some(key => {
                        return excludeSearchColumns.includes(key) ? false : interviewer[key].toString().toLowerCase().includes(search.toLowerCase().trim())
                    })
                });
            setinterviewers(filtered);
        })
    }

    const submitACHandler = (e) => {
        e.preventDefault()

        // checks if any of the inputs are missing
        if (!startDate){
            setMissingParams(true)
            return
        }
        let checkedBoxesCandidates = document.querySelectorAll('input[name=candidate]:checked');
        if (checkedBoxesCandidates.length < 1){
            setMissingParams(true)
            return
        }
        let checkedBoxesInterviewers = document.querySelectorAll('input[name=interviewer]:checked');
        if (checkedBoxesInterviewers.length < 1){
            setMissingParams(true)
            return
        }
        console.log('FINAL DATES = START: ' + startDate + ', END: ' + endDate)
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
            setinterviewers(res.data)
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

                <div className="col border overflow-auto" style={ { height: 400 } }>
                    <br/>
                    <input className="form-control me-2 search-bar-input mb-2" type="search" placeholder="Search" aria-label="Search" onChange={e => handleCandidateSearch(e.target.value)} />
                    <b>Candidates: </b>
                    <hr/>
                        {candidates.map( (candidate) => 
                            <div key={candidate.id}>
                                <input type="checkbox" name="candidate" value={candidate.id} onChange={(e)=>setSelectedCandidates([...selectedCandidates, e.target.value])} />
                                <label for="candidate">
                                    &nbsp;{candidate.firstName} {candidate.lastName} - <span className="fw-light fst-italic">{candidate.streamName}</span>
                                </label>
                            <hr/>
                            </div>
                        )}
                </div>

                <div className="col border overflow-auto" style={ { height: 400 } }>
                    <br/>
                    <input className="form-control me-2 search-bar-input mb-2" type="search" placeholder="Search" aria-label="Search" onChange={e => handleInterviewerSearch(e.target.value)} />
                    <b>Interviewers: </b>
                    <hr/>
                        {interviewers.map( interviewer => 
                            <div key={interviewer.id}>
                                <input type="checkbox" name="interviewer" value={interviewer.id} onChange={(e)=>setSelectedInterviewers([...selectedInterviewers, e.target.value])} />
                                <label for="candidate">&nbsp;{interviewer.firstName} {interviewer.lastName}</label>
                                <hr/>
                            </div>
                        )}
                </div>

                <button type="submit" className="btn btn-success me-2 mt-5">Next</button>
                { missingParams && <ViewAssessmentCentres /> }
                
            </form>
        </div>
    )
}


export default withRouter(CreateAC)
