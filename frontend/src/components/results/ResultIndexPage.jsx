import React, { Component } from 'react';
import Responses from './Responses';

class ResultIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">
                This is the Result Page.
                <Responses/>
            </div>
        );
    }
}

export default ResultIndexPage;