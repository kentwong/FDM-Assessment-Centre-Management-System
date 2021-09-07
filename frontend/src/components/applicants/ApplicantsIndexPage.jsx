import React, { Component } from 'react';
import ViewApplicants from './ViewApplicants';

class ApplicantsIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">
                This is the applicant's page.
                <div className="row">
                    <div className="col-6">
                        <ViewApplicants />
                    </div>
                    <div className="col-6">
                        <ViewApplicants />
                    </div>
                </div>

            </div>
        );
    }
}

export default ApplicantsIndexPage;