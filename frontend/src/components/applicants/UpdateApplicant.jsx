import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import StreamService from '../../services/StreamService';
import RecruiterService from '../../services/RecruiterService';
import InterviewForm from './InterviewForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

function UpdateApplicant(props) {

    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [university, setUniversity] = useState('');
    const [cv, setCv] = useState('');
    const [notes, setNotes] = useState('');
    const [address, setAddress] = useState(''); //Address object
    const [aptitudeScore, setAptitudeScore] = useState(0.00); //double
    const [availStreams, setAvailStreams] = useState([]);
    const [streamId, setStreamId] = useState();
    const [status, setStatus] = useState('');
    const [availRecruiters, setAvailRecruiters] = useState([]);
    const [recruiterId, setRecruiterId] = useState();
    // const [recruiter, setRecruiter] = useState({}); //Recruiter object
    const [loading, setLoading] = useState(false); //boolean - check status of cv upload

    useEffect(() => {
        CandidateService.getCandidateById(props.match.params.id).then(res => {
            console.log(res.data);
            let candidate = res.data;
            setId(candidate.id);
            setFirstName(candidate.firstName);
            setLastName(candidate.lastName);
            setDateOfBirth(candidate.dateOfBirth);
            setEmail(candidate.email);
            setPhoneNumber(candidate.phoneNumber);
            setUniversity(candidate.university);
            setCv(candidate.cv);
            setNotes(candidate.notes);
            setAddress(candidate.address.address);
            setStreamId(candidate.stream.id);
            setRecruiterId(candidate.recruiterId);
            setAptitudeScore(candidate.aptitudeScore);
            setStatus(candidate.status);
        })

        RecruiterService.getRecruiters().then(res => {
            setAvailRecruiters(res.data);
        })

        StreamService.getStreams().then(res => {
            setAvailStreams(res.data);
        })
        //init tooltip
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
    }, [])

    const uploadCV = async e => {

        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'fdmgroup');
        setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/fdmgroup/image/upload", {
            method: 'POST',
            body: data
        })

        const file = await res.json();
        console.log(file);
        setCv(file.url);
        setLoading(false);
    }

    const cancel = () => {
        props.history.push('/applicants');
    }

    const updateCandidate = e => {
        e.preventDefault();

        let candidate = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            email: email,
            phoneNumber: phoneNumber,
            university: university,
            cv: cv,
            notes: notes,
            address: { address: address },
            stream: { id: parseInt(streamId) },
            ...(recruiterId) && { recruiter: { id: parseInt(recruiterId), type: 'recruiter' } },
            aptitudeScore: aptitudeScore,
            status: status
        };
        console.log(JSON.stringify(candidate));
        
        CandidateService.updateCandidate(candidate, id).then(res => {
            props.history.push('/applicants');
        });
    }

    return (
        <div>
            <div className="custom-container">
                <form onSubmit={updateCandidate}>
                    <h2 className="mb-5">Update {firstName}'s Details</h2>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="recruiterId" className="form-label">Recruiter </label>
                            <button type="button" className="btn-transparent" data-bs-toggle="tooltip" data-bs-placement="right" title="Written approval is needed to change assigned recruiter.">
                                <FontAwesomeIcon className="icon-link me-2" icon={faInfoCircle} color="#0d6efd" />
                            </button>
                            <select className="form-select" id="recruiterId" value={recruiterId} onChange={e => setRecruiterId(e.target.value)}>
                                <option value='0' className="text-danger">Assign Later</option>
                                {availRecruiters.map(
                                    recruiter => (
                                        <option key={recruiter.id} value={recruiter.id}>{recruiter.firstName} {recruiter.lastName}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="streamId" className="form-label">Stream <span className="text-danger">*</span></label>
                            <select className="form-select" id="streamId" value={streamId} onChange={e => setStreamId(e.target.value)}>
                                {availStreams.map(
                                    stream => (
                                        <option key={stream.id} value={stream.id}>{stream.streamName}</option>
                                    ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="status" className="form-label">Applicant's Status <span className="text-danger">*</span></label>
                            <select className="form-select" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                                <option value="Pending CV Screening">Pending CV Screening</option>
                                <option value="Pending Phone Screening">Pending Phone Screening</option>
                                <option value="Pending Aptitude Test">Pending Aptitude Test</option>
                                <option value="Pending Video Interview">Pending Video Interview</option>
                                <option value="Pending AC">Pending AC</option>
                                <option value="Applicant Rejected" className="text-danger">Applicant Rejected</option>
                                <option value="Offer Letter Sent" className="text-success">Offer Letter Sent</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number <span className="text-danger">*</span></label>
                            <input type="tel" className="form-control" id="phoneNumber" minLength="10" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="dateOfBirth" className="form-label">Date Of Birth <span className="text-danger">*</span></label>
                            <input type="date" className="form-control" id="dateOfBirth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} required></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="address" value={address} onChange={e => setAddress(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="university" className="form-label">University <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="university" value={university} onChange={e => setUniversity(e.target.value)} required></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="aptitudeScore" className="form-label">Aptitude Test Result (*/30) </label>
                            <input type="number" className="form-control" id="aptitudeScore" value={aptitudeScore} min="0" max="30" onChange={e => setAptitudeScore(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cv" className="form-label">Upload CV </label>
                        <input type="file" className="form-control" id="cv" onChange={uploadCV}></input>
                        {cv === '' ? <p>No CV Uploaded</p> : loading === true ? <p className="text-danger"> uploading...</p> : <p><a className="icon-link" href={cv}>Download current CV</a></p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="notes" className="form-label">Notes/ Remarks </label>
                        <textarea className="form-control" id="notes" rows="3" value={notes} onChange={e => setNotes(e.target.value)} ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success me-2 mt-5">Update</button>
                    <button className="btn btn-danger mt-5" onClick={cancel}>Cancel</button>
                </form>
            </div>
            <InterviewForm id={id} />
        </div>
    );

}

export default UpdateApplicant;