import React, { Component } from 'react';
import {Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import ViewAssessmentCentres from './coordinator/ViewAssessmentCentres';
import CreateAC from './coordinator/CreateAC';

// const shouldDisplayCreateAC = user instanceof coordinator

class CalenderIndexPage extends Component {
    render() {
        return (
            <div className="custom-container">
                This is the Calender Page.
                <ScheduleComponent currentView='Month'>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
                <br/>ADD ASSESSMENT CENTRE - FOR AC COORDINATOR
                {}
                <ViewAssessmentCentres />
                {/* { shouldDisplayCreateAC && <CreateAC />} */}
                <CreateAC />
            </div>
        );
    }
}

export default CalenderIndexPage;