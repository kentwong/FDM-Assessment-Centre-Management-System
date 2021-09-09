// Generate Three days - 72 hours from email sent
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const threeDaysFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3);
const month3 = monthNames[threeDaysFromNow.getMonth()];
const day3 = String(threeDaysFromNow.getDate()).padStart(2, '0');
const year3 = threeDaysFromNow.getFullYear();
const dayName3 = dayNames[threeDaysFromNow.getDay()];
const replyDate_72hours = dayName3 + ', ' + month3 + ' ' + day3 + ', ' + year3;

const VideoInterviewTemplate = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

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

export default VideoInterviewTemplate;