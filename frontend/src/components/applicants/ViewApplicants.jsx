import React, { useState, useEffect } from 'react';
import CandidateService from '../../services/CandidateService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faEnvelopeOpenText, faDownload, faTrashAlt, envelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function ViewApplicants(props) {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        CandidateService.getCandidates().then((res) => {
            setCandidates(res.data);
        })
    }, [])

    const deleteCandidate = (id) => {
        CandidateService.deleteCandidate(id);
        setCandidates(candidates.filter(candidate => candidate.id !== id));
    }

    // Generate Two weeks from email sent
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const twoWeeksFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);
    const month1 = monthNames[twoWeeksFromNow.getMonth()];
    const day1 = String(twoWeeksFromNow.getDate()).padStart(2, '0');
    const year1 = twoWeeksFromNow.getFullYear();
    const startDate = month1 + ' ' + day1 + ', ' + year1;

    // Generate Two Days from email sent
    const twoDaysFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2);
    const month2 = monthNames[twoDaysFromNow.getMonth()];
    const day2 = String(twoDaysFromNow.getDate()).padStart(2, '0');
    const year2 = twoDaysFromNow.getFullYear();
    const dayName2 = dayNames[twoDaysFromNow.getDay()];
    const replyDate_48hours = dayName2 + ', ' + month2 + ' ' + day2 + ', ' + year2;

    // Generate Three days - 72 hours from email sent
    const threeDaysFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3);
    const month3 = monthNames[threeDaysFromNow.getMonth()];
    const day3 = String(threeDaysFromNow.getDate()).padStart(2, '0');
    const year3 = threeDaysFromNow.getFullYear();
    const dayName3 = dayNames[threeDaysFromNow.getDay()];
    const replyDate_72hours = dayName3 + ', ' + month3 + ' ' + day3 + ', ' + year3;


    const templateOfferOfEmployment = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Ref. ${candidate.stream.streamName} – Immediate Start

On behalf of FDM Group, we wish to congratulate you on being accepted for the ${candidate.stream.streamName} training course.

We are looking forward to you joining the team with a start date of ${startDate}.

Please find attached:
•	CEO Welcome letter
•	Cover letter
•	Employment agreement

Please return the signed contract back to me by 3pm ${replyDate_48hours}. 

Kind Regards,
The FDM Group Recruitment Team
`;

    const templateFollowUp = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Ref. ${candidate.stream.streamName} – Immediate Start

Thank you for your interest in FDM! Due to the volume of applications we have received, you will be contacted within the next 14 days for your application status. 

In the meantime, don’t forget to join us on social media @FDMgroup #FDMcareers to keep up to date with events and latest news. 

Find out more about the culture at FDM and our values at https://www.fdmgroup.com/en-au/au-culture/. 

Many thanks for your interest in FDM Group. 

Kind Regards, 
The FDM Group Recruitment Team
    `;

    const templateRejection = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Ref. ${candidate.stream.streamName} Graduate Program

Thank you for your application to join FDM. After careful consideration, we regret to inform you that we are unable to offer you an interview at this stage. 

We would like to thank you for your interest in FDM and wish you the best of luck for the future. 

Kind Regards, 
The FDM Group Recruitment Team
    `;

    const templateACInvite = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Ref. ${candidate.stream.streamName} – Immediate Start

Congratulations on passing your online tests! You are now a step closer to joining the next generation of IT and business professionals. Please find attached your invitation to the final assessment stage from the FDM Graduate Program. This will consist of a welcome presentation followed by final stage interviews. The dress code for this day is smart business attire.

Your Assessment Centre is scheduled for the [date_long_format] from [assessment_centre(start_time)] to [assessment_centre(end_time)] . Please reply to this message if you are unable to attend on this day.

We look forward to meeting you virtually and wish you the best of luck in your preparation.

Kind regards,
The FDM Group Recruitment Team
    `;

    const templateVideoInterviewInvite = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Thank you for applying to the FDM Group ${candidate.stream.streamName}. We are delighted to inform you that you have passed the first stage of our assessment process.

We are now inviting you to the Video Interview stage, the deadline for this interview is by 3pm ${replyDate_72hours}, all you need is a webcam or to download the app - if you are using an iOS device then please visit the App Store or for Android visit the Market Place.

Whether you have applied for the Business or Technical Pathway, we are interested to find out why you wish to join our Graduate Programme and the hundreds of like-minded individuals who choose FDM throughout the year?

One of the key benefits to video interviewing is that you can take it when and where you like. The whole process will take you less than 20 minutes. One of our Recruitment Team will then review your interview and if you are successful, we will invite you to one of our Assessment Centres.

Click on the link below to see the interview details:
https://launchpadrecruitsapp.com/seamless_invite/abf9462a
    
If you need any help with the interview, contact details are available when you click on the link. As always, just let us know if you have any questions.

But just remember to have fun and let your personality come out!
    
To find out more about FDM and our programmes follow this link:
http://fdmgroup.com/brochures/uk-academy-brochure/
    
Kind regards,
The FDM Team
    `;

    const templateAptitudeTest = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Thank you or your continued interest in FDM Group. You are now a step closer to joining our FDM Graduate Program. We invite you to complete our online IT Aptitude Test. 

You will have 72 hours to complete this test from receipt of the initial invitation. If for any reason you are unable to do so within this time, please contact your recruiter as soon as possible.  

Here are some details you should be aware of:
    -	You can log in and complete the test prior to the deadline given by your recruiter
    -	Once you have logged in you will have 50 minutes to complete all questions
    -	DO NOT exit the test page until you have submitted the test, otherwise the test will auto submit your answers.
    -	We recommend you perform the test on a desktop/PC using Google chrome

Please contact your recruiter if you have any questions or support@vervoe.com if you experience any technical issues.

Best of luck!
The FDM Group Team
    `;

    return (
        <div className="container my-5">
            <div className="container-fluid col-5 me-0 pe-0 mb-5">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <h2 className="text-center">Candidates List</h2>

            <div className="row">
                <table className="table table-Striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="">ID</th>
                            <th className="">Name</th>
                            <th className="">Stream</th>
                            <th className="">Status</th>
                            <th className="">Phone</th>
                            <th className="">Email</th>
                            <th className="">CV</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidates.map(
                                candidate =>
                                    <>
                                        <tr key={candidate.id}>
                                            <td> {candidate.id} </td>
                                            <td> {candidate.firstName} {candidate.lastName} </td>
                                            <td> {candidate.stream.streamName} </td>
                                            <td> {candidate.status} </td>
                                            <td> {candidate.phoneNumber} </td>
                                            <td> {candidate.email}</td>
                                            <td> <a className="download" href={candidate.cv}><FontAwesomeIcon className="fa-lg" icon={faDownload} color="#0d6efd" /></a> </td>
                                            <td>
                                                <a href="/" data-bs-toggle="modal" data-bs-target={"#modalEmail" + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" /></a>
                                                <div className="modal fade" id={"modalEmail" + candidate.id} aria-hidden="true" aria-labelledby="modalEmailLabel" tabIndex="-1">
                                                    <div className="modal-dialog modal-dialog-centered modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="modalEmailLabel">Email Templates</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={'mailto:' + candidate.email}>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        Blank Email
                                                                    </a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Offer of Employment - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(templateOfferOfEmployment(candidate))}`
                                                                    }>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        FDM Offer of Employment
                                                                    </a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Follow Up - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(templateFollowUp(candidate))}`
                                                                    }>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        Follow-up
                                                                    </a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Letter of Rejection - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(templateRejection(candidate))}`
                                                                    }>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        Rejection
                                                                    </a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Assessment Centre Invitation - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(templateACInvite(candidate))}`
                                                                    }>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        AC Invitation
                                                                    </a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Video Interview Invitation - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(templateVideoInterviewInvite(candidate))}`
                                                                    }>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        Video Interview Invitation
                                                                    </a>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <a className="icon-link" href={`mailto:${candidate.email}
                                                                ?subject=FDM Australia Aptitude Test - ${candidate.firstName} ${candidate.lastName}
                                                                &body=${encodeURIComponent(templateAptitudeTest(candidate))}`
                                                                    }>
                                                                        <FontAwesomeIcon className="fa-lg icon-link me-2" icon={faEnvelopeOpenText} color="#0d6efd" />
                                                                        Aptitude Test
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a href={'/applicant/edit/' + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faUserEdit} color="#0d6efd" /></a>

                                                <a href="/" data-bs-toggle="modal" data-bs-target={"#modalDelete" + candidate.id}><FontAwesomeIcon className="fa-lg icon-link me-2" icon={faTrashAlt} color="#0d6efd" /></a>
                                                <div className="modal fade" id={"modalDelete" + candidate.id} aria-hidden="true" aria-labelledby="modalDeleteLabel" tabIndex="-1">
                                                    <div className="modal-dialog modal-dialog-centered modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="modalDeleteLabel">Delete Confirmation</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Are you sure you want to delete the details of {candidate.firstName} {candidate.lastName}?
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button className="btn btn-danger" data-bs-dismiss="modal" aria-label="Delete" onClick={() => deleteCandidate(candidate.id)}>Delete</button>
                                                                <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                            )
                        }
                    </tbody>

                </table>




            </div>
        </div>
    );
}

export default ViewApplicants;