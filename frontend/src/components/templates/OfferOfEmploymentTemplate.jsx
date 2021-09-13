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

const OfferOfEmploymentTemplate = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

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

export default OfferOfEmploymentTemplate;