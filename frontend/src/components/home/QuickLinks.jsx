import React, { Component } from 'react';
import JobTrain from '../../assets/images/JobTrain.png';
import LaunchPadRecruits from '../../assets/images/LaunchPad.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Outlook from '../../assets/images/Outlook.png';
import Eploy from '../../assets/images/Eploy.png';
import Vervoe from '../../assets/images/Vervoe.png';

class QuickLinks extends Component {

    render () {
        return (
            <div>
                <h2 className="centreMe">Quick Links</h2>
                      
                <div className="overflow-auto centreMe borderMe"  style={{height: '275px'}}>
                    <a href="https://jobtrain.co.uk/" target="_blank" rel="noreferrer">
                        <img src={JobTrain} alt="JobTrain" className="linksImg" />
                    </a>
                    <br />
                    <a href="https://support.launchpadrecruits.com/en/login" target="_blank" rel="noreferrer">
                        <img src={LaunchPadRecruits} alt="LaunchPadRecruits" className="linksImg" />
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" className="linksImg" />
                    </a>
                    <br />
                    <a href="https://outlook.office365.com/mail/inbox" target="_blank" rel="noreferrer">
                        <img src={Outlook} alt="Outlook" className="linksImg" />
                    </a>
                    <br />
                    <a href="https://careers.eploy.co.uk/registration.aspx" target="_blank" rel="noreferrer">
                        <img src={Eploy} alt="Eploy" className="linksImg" />
                    </a>
                    <br />
                    <a href="https://app.vervoe.com/login" target="_blank" rel="noreferrer">
                        <img src={Vervoe} alt="Vervoe" className="linksImg" />
                    </a>
                </div> 
            </div>    
           
        );
    }
}
export default QuickLinks;