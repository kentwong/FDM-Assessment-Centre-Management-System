import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import RecruiterService from '../../services/RecruiterService';

function CreateApplicant(props) {

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
    const [streamId, setStreamId] = useState(1);
    const [status, setStatus] = useState('Pending CV Screening');
    const [recruiters, setRecruiters] = useState([]);
    // const [recruiter, setRecruiter] = useState({}); //Recruiter object - for later use
    const [loading, setLoading] = useState(); //boolean - check status of cv upload

    // useEffect(() => {
    //     RecruiterService.getRecruiters(res => {
    //         setRecruiters(res.data);
    //     })
    // }, []);

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

    const addCandidate = e => {
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
            aptitudeScore: aptitudeScore,
            status: status
        };
        console.log(JSON.stringify(candidate));

        CandidateService.createCandidate(candidate).then(res => {
            props.history.push('/applicants');
        });
    }

    return (
        <div className="custom-container">
            <form onSubmit={addCandidate}>
                <h2 className="mb-5">Create New Applicant</h2>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="streamId" className="form-label">Stream <span className="text-danger">*</span></label>
                        <select className="form-select" id="streamId" defaultValue="Software Development" onChange={e => setStreamId(e.target.value)}>
                            <option value="1">Software Development</option>
                            <option value="2">Business Analysis &#38; Business Intelligence</option>
                            <option value="3">Technical Analysis</option>
                            <option value="4">Cloud Computing Engineering</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="status" className="form-label">Applicant's Status <span className="text-danger">*</span></label>
                        <select className="form-select" id="status" defaultValue="Pending CV Screening" onChange={e => setStatus(e.target.value)}>
                            <option value="Pending CV Screening">Pending CV Screening</option>
                            <option value="Pending Phone Screening">Pending Phone Screening</option>
                            <option value="Pending Aptitude Test">Pending Aptitude Test</option>
                            <option value="Pending Video Interview">Pending Video Interview</option>
                            <option value="Pending AC">Pending AC</option>
                            <option value="Applicant Rejected">Applicant Rejected</option>
                            <option value="Offer Letter Sent">Offer Letter Sent</option>
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
                    {loading === true ? <p className="text-danger"> uploading...</p> : <p className="text-success">{cv}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="notes" className="form-label">Notes/ Remarks </label>
                    <textarea className="form-control" id="notes" rows="3" value={notes} onChange={e => setNotes(e.target.value)} ></textarea>
                </div>

                <button type="submit" className="btn btn-success me-2 mt-5">Add</button>
                <button className="btn btn-danger mt-5" onClick={cancel}>Cancel</button>
            </form>
        </div>
    );

}

export default CreateApplicant;