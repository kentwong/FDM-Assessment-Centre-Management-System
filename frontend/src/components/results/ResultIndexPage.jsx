import React, { Component } from 'react';
import Responses from './Responses';
import AssessmentCentreResponses from './AssessmentCentreResponses';

class ResultIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">
                This is the Result Page.
                <br/>
                <br/>
                <br/>
                <AssessmentCentreResponses/>
            </div>
        );
    }
}

export default ResultIndexPage;