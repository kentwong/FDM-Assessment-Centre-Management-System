import React, { Component } from 'react';
import OverviewTable from './OverviewTable';

class HomeIndexPage extends Component {
    
    //role = localStorage.getItem("role");
    
    render() {
        if (localStorage.getItem("role") == "recruiter") {
            return (
                <div className="custom-container">
                    <div className="row">
                        <div className="col">
                            <OverviewTable  />
                        </div>
                        <div className="col">
                            2
                        </div>
                        <div className="col">
                            3
                        </div>

                    </div> 
                </div>
            );
        }
        else if (localStorage.getItem("role") == "interviewer") {
            return (
                <div className="custom-container">
                    interview
                </div>
            );
        }
        else if (localStorage.getItem("role") == "ACCoordinator") {
            return (
                <div className="custom-container">
                    acco
                </div>
            );
        }
        
    }
}

export default HomeIndexPage;