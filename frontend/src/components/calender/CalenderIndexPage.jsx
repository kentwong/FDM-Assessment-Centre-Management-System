import React, { useState, Component } from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import ViewAssessmentCentres from './coordinator/ViewAssessmentCentres';
import CreateAC from './coordinator/CreateAC';
import AssessmentCentreService from '../../services/AssessmentCentreService'

const shouldDisplayCreateAC = localStorage.getItem('role') === 'ACCoordinator'

class CalenderIndexPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          showCreate: false,
          readOnly: true
        };

        this.data =  [{
                Id: 1,
                Subject: '2/9 Assessment Centre',
                StartTime: new Date(2021, 8, 2, 12, 0),
                EndTime: new Date(2021, 8, 2, 14, 0),
                IsReadonly: true,
            }, {
                Id: 2,
                Subject: '7/9 Assessment Centre',
                StartTime: new Date(2021, 8, 7, 9, 30),
                EndTime: new Date(2021, 8, 7, 11, 0),
                IsReadonly: false,
            }];

        AssessmentCentreService.getAssessmentCentres().then((res) => {

            res.data.map(ac => {
                console.log("AC: " + JSON.stringify(ac.candidates))

                let day = new Date(ac.start).getDate()
                let month = new Date(ac.start).getMonth()

                // let [names, setNames] = useState("Names: ")
                ac.candidates.map(candidate => {
                    // setNames(names + " " + candidate.firstName + " " + candidate.lastName + "; ")
                })

                let acTemplate = {
                    Id: ac.id,
                    Subject: day + "/" + month + " Assessment Centre",
                    StartTime: ac.start,
                    EndTime:  ac.end,
                    Description: JSON.stringify(ac.candidates),
                    IsReadonly: false,
                }
                this.data.push(acTemplate)
            })
        })

    }
    
    displayCreateACHandler = () => {
        this.setState({ showCreate: !this.state.showCreate })
    }

    render() {
        return (
            <div className="custom-container">
                This is the Calender Page.
                <ScheduleComponent currentView='Month' eventSettings={{ dataSource: this.data }} views={['Day', 'Week', 'Month', 'Agenda']} >
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