import React, { Component } from 'react';
import CandidateService from '../../services/CandidateService';
import REMOVEBEFORESUBMISSIONService from '../../services/REMOVEBEFORESUBMISSIONService';

class TestREMOVEBEFORESUBMISSIONIndexPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vars: []
        }
    }

    render() {

        var e = REMOVEBEFORESUBMISSIONService.w();
        var r = "variable";
        
        return (
            <div className="custom-container">
                <a href="/applicant/interviewform"><button className="btn btn-primary">Interview Form</button></a>
            </div>
        );
    }
}

export default TestREMOVEBEFORESUBMISSIONIndexPage;