import React, { useState, Component } from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import ViewAssessmentCentres from './coordinator/ViewAssessmentCentres';
import CreateAC from './coordinator/CreateAC';

// ---------------
// var user = {
//     id: 2,
// 	firstName: 'Michael',
// 	lastName: 'Mike',
// 	email: 'mike@fdm.com',
// 	phoneNumber: '1234',
// }
// localStorage.setItem('user', JSON.stringify(user))
// localStorage.setItem('role', 'coordinator')

// const storedCoordinator = localStorage.getItem('user')
// let coordinator = JSON.parse(storedCoordinator)
// ---------------

// const shouldDisplayCreateAC = localStorage.getItem('role') === 'coordinator'

// localStorage.setItem('user', res.data.staffId);
// localStorage.setItem('role', res.data.role);

const coordinator = localStorage.getItem('user')
const shouldDisplayCreateAC = localStorage.getItem('role') === 'ACCoordinator'

class CalenderIndexPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          showCreate: false,
        };

        console.log(localStorage.getItem('role'))

        this.data =  [{
                Id: 1,
                Subject: 'Assessment Centre 30/08',
                StartTime: new Date(2021, 7, 30),
                EndTime: new Date(2021, 7, 30)
            }, {
                Id: 2,
                Subject: 'Assessment Centre 02/09',
                StartTime: new Date(2021, 8, 2, 12, 0),
                EndTime: new Date(2021, 8, 2, 14, 0)
            }, {
                Id: 3,
                Subject: 'Assessment Centre 06/09',
                StartTime: new Date(2021, 8, 6, 9, 30),
                EndTime: new Date(2021, 8, 6, 11, 0)
            }, {
                Id: 4,
                Subject: 'Assessment Centre 14/09',
                StartTime: new Date(2021, 8, 14, 13, 0),
                EndTime: new Date(2021, 8, 14, 14, 30)
            }];
      }
    
    displayCreateACHandler = () => {
        this.setState({ showCreate: !this.state.showCreate })
    }

    render() {
        return (
            <div className="custom-container">
                This is the Calender Page.
                <ScheduleComponent currentView='Month' eventSettings={{ dataSource: this.data }} >
                    <ViewsDirective>
                        <ViewDirective option='Day'></ViewDirective>
                        <ViewDirective option='Week'></ViewDirective>
                        <ViewDirective option='Month'></ViewDirective>
                        <ViewDirective option='Agenda'></ViewDirective>
                    </ViewsDirective>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
                
                {/* <ViewAssessmentCentres /> */}
                <br/>
                { shouldDisplayCreateAC && <button className="btn btn-primary" onClick={this.displayCreateACHandler}>Create Assessment Centre</button>}
                { this.state.showCreate && <CreateAC />}
                
            </div>
        );
    }
}

export default CalenderIndexPage;