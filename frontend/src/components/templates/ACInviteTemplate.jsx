const ACInviteTemplate = candidate => `Dear ${candidate.firstName} ${candidate.lastName},

Ref. ${candidate.stream.streamName} – Immediate Start

Congratulations on passing your online tests! You are now a step closer to joining the next generation of IT and business professionals. Please find attached your invitation to the final assessment stage from the FDM Graduate Program. This will consist of a welcome presentation followed by final stage interviews. The dress code for this day is smart business attire.

Your Assessment Centre is scheduled for the [date_long_format] from [assessment_centre(start_time)] to [assessment_centre(end_time)] . Please reply to this message if you are unable to attend on this day.

We look forward to meeting you virtually and wish you the best of luck in your preparation.

Kind regards,
The FDM Group Recruitment Team
`;

export default ACInviteTemplate;