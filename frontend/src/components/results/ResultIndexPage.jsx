import React, { Component } from 'react';
import Responses from './Responses';

class ResultIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">
                <h2 className="text-center">Results List</h2>
                <Responses/>
            </div>
        );
    }
}

export default ResultIndexPage;