import React, { useState, Component } from 'react';
import {Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import ViewAssessmentCentres from './coordinator/ViewAssessmentCentres';
import CreateAC from './coordinator/CreateAC';

// ---------------
var user = {
    id: 2,
	firstName: 'Michael',
	lastName: 'Mike',
	email: 'mike@fdm.com',
	phoneNumber: '1234',
}
localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('role', 'coordinator')

const storedCoordinator = localStorage.getItem('user')
let coordinator = JSON.parse(storedCoordinator)
// ---------------

const shouldDisplayCreateAC = localStorage.getItem('role') === 'coordinator'


class CalenderIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showCreate: false,
        };

        this.data =  [{
                Id: 1,
                Subject: 'Explosion of Betelgeuse Star',
                StartTime: new Date(2018, 1, 15, 9, 30),
                EndTime: new Date(2018, 1, 15, 11, 0)
            }, {
                Id: 2,
                Subject: 'Thule Air Crash Report',
                StartTime: new Date(2018, 1, 12, 12, 0),
                EndTime: new Date(2018, 1, 12, 14, 0)
            }, {
                Id: 3,
                Subject: 'Blue Moon Eclipse',
                StartTime: new Date(2018, 1, 13, 9, 30),
                EndTime: new Date(2018, 1, 13, 11, 0)
            }, {
                Id: 4,
                Subject: 'Meteor Showers in 2018',
                StartTime: new Date(2018, 1, 14, 13, 0),
                EndTime: new Date(2018, 1, 14, 14, 30)
            }];
      }
    
    displayCreateACHandler = () => {
        this.setState({ showCreate: !this.state.showCreate })
    }
    
    render() {
        return (
            <div className="custom-container">
            <a href="/setupAC">Next</a>
                This is the Calender Page.
                <ScheduleComponent currentView='Month' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.data }} >
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
                
                <br/>ADD ASSESSMENT CENTRE - FOR AC COORDINATOR
                
                <ViewAssessmentCentres />
                { shouldDisplayCreateAC && <button className="btn btn-primary" onClick={this.displayCreateACHandler}>Create Assessment Centre</button>}
                { this.state.showCreate && <CreateAC />}
                
            </div>
        );
    }
}

export default CalenderIndexPage;