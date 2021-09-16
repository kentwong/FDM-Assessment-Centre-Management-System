const ACInviteInterviewerTemplate = (staff, start, end) => `Dear ${staff.firstName} ${staff.lastName},

You have been invited to interview for the Assessment Centre being held on ${start.date} starting at ${start.time} and will conclude by ${end.time}, with the wash-up commencing immediately afterwards.

Please log into the Recruitment Hub to see your schedule of interviews for the Assessment Centre.

Please notify myself if you are unable to attend the scheduled Assessment Centre.

Kind regards,
The FDM AC Coordinator Team
`;

export default ACInviteInterviewerTemplate;