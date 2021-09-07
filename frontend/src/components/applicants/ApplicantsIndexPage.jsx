import React, { Component } from 'react';
import ViewApplicants from './ViewApplicants';

class ApplicantsIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">

                <div className="row">
                    <div className="col-12">
                        <ViewApplicants />
                    </div>
                </div>

                <a href="/applicant/add"><button className="btn btn-primary">Add New Applicant</button></a>

            </div>
        );
    }
}

export default ApplicantsIndexPage;