import React, { Component } from 'react';
import {Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import ViewAssessmentCentres from './coordinator/ViewAssessmentCentres';
import CreateAC from './coordinator/CreateAC';

var user = {
    id: 1,
	firstName: 'Michael',
	lastName: 'Mike',
	email: 'email@fdm.com',
	phoneNumber: '123456',
}
localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('role', 'coordinator')

// -----------

const shouldDisplayCreateAC = localStorage.getItem('role') === 'coordinator'

const heandleCreateACClick = () => {
    alert("CREATE ASSESSMENT CENTRE")
}

class CalenderIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">
                This is the Calender Page.
                <ScheduleComponent currentView='Month'>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
                
                <br/>ADD ASSESSMENT CENTRE - FOR AC COORDINATOR
                
                <ViewAssessmentCentres />
                { shouldDisplayCreateAC && <button className="btn btn-primary" onClick={heandleCreateACClick}>Create Assessment Centre</button>}
                { shouldDisplayCreateAC && <CreateAC />}
            </div>
        );
    }
}

export default CalenderIndexPage;