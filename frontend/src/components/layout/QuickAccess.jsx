import React, { Component } from 'react';
import JobTrain from '../../assets/images/JobTrain.png';
import LaunchPadRecruits from '../../assets/images/LaunchPad.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Outlook from '../../assets/images/Outlook.png';
import Eploy from '../../assets/images/Eploy.png';
import Vervoe from '../../assets/images/Vervoe.png';

function QuickAccess({ colSize }) {
    return (
        <div>
            <div className="row quick-access-link">
                <div className={"col-" + colSize}>
                    <a href="https://jobtrain.co.uk/" target="_blank" rel="noreferrer">
                        <img src={JobTrain} alt="JobTrain" />
                        <p>JobTrain</p>
                    </a>
                </div>
                <div className={"col-" + colSize}>
                    <a href="https://support.launchpadrecruits.com/en/login" target="_blank" rel="noreferrer">
                        <img src={LaunchPadRecruits} alt="LaunchPadRecruits" />
                        <p>Launchpad Recruits</p>
                    </a>
                </div>
                <div className={"col-" + colSize}>
                    <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" />
                        <p>LinkedIn</p>
                    </a>
                </div>
                {/* </div>
            <div className="row quick-access-link"> */}
                <div className={"col-" + colSize}>
                    <a href="https://outlook.office365.com/mail/inbox" target="_blank" rel="noreferrer">
                        <img src={Outlook} alt="Outlook" />
                        <p>Outlook</p>
                    </a>
                </div>
                <div className={"col-" + colSize}>
                    <a href="https://careers.eploy.co.uk/registration.aspx" target="_blank" rel="noreferrer">
                        <img src={Eploy} alt="Eploy" />
                        <p>Eploy</p>
                    </a>
                </div>
                <div className={"col-" + colSize}>
                    <a href="https://app.vervoe.com/login" target="_blank" rel="noreferrer">
                        <img src={Vervoe} alt="Vervoe" />
                        <p>Vervoe</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default QuickAccess;