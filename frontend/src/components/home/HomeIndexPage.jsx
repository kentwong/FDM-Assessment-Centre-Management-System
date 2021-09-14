import React, { Component } from 'react';
import Calendar from './Calendar';
import OverviewTable from './OverviewTable';
import QuickLinks from './QuickLinks';
import UpdatesAndReminders from './UpdatesAndReminders';

class HomeIndexPage extends Component {
        
    render() {
        if (localStorage.getItem("role") == "recruiter" || localStorage.getItem("role") == "ACCoordinator") {
            return (
                <div className="custom-container">
                    <div className="row">
                        <div className="col">
                            <OverviewTable  />
                        </div>
                        <div className="col">
                            <UpdatesAndReminders />
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <Calendar />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"  >
                                    <br />
                                    <QuickLinks />
                                </div>
                            </div>
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
        
    }
}

export default HomeIndexPage;