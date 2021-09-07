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
                TESTING PAGE dsfsdfdsfdsdcac {r}
            </div>
        );
    }
}

export default TestREMOVEBEFORESUBMISSIONIndexPage;