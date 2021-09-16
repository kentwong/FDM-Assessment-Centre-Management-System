import React, { Component } from 'react';
import AssessmentCentreService from '../../services/AssessmentCentreService'
import {Inject, ScheduleComponent, Month} from '@syncfusion/ej2-react-schedule';

class Calendar extends Component {
    constructor(props){
        super(props)

        this.data =  [{
                Id: 1,
                Subject: '2/9 Assessment Centre',
                StartTime: new Date(2021, 8, 2, 12, 0),
                EndTime: new Date(2021, 8, 2, 14, 0),
                Description: 'Candidates: Mike Evans; Chris Godwin; Travis Kelce; Jason Kelce; Aaron Donald; ',
                IsReadonly: true,
            }, {
                Id: 2,
                Subject: '7/9 Assessment Centre',
                StartTime: new Date(2021, 8, 7, 9, 30),
                EndTime: new Date(2021, 8, 7, 11, 0),
                Description: 'Candidates: Thomas Edward; Patrick Brady; Aaron Rodgers; Drew Brees; Patrick Mahomes; ',
                IsReadonly: true,
            }];
       
       AssessmentCentreService.getAssessmentCentres().then((res) => {

            res.data.map(ac => {
                // console.log("AC: " + JSON.stringify(ac.candidates))

                let day = new Date(ac.start).getDate()
                let month = new Date(ac.start).getMonth()

                let names = "Candidates: ";
                ac.candidates.map(candidate => {
                    names = (names + " " + candidate.firstName + " " + candidate.lastName + "; ")
                })

                let acTemplate = {
                    Id: ac.id,
                    Subject: day + '/' + month + ' Assessment Centre',
                    StartTime: ac.start,
                    EndTime:  ac.end,
                    Description: names,
                    IsReadonly: true,
                }
                this.data.push(acTemplate)
            })
        })

        window.setTimeout(5000)
    }

    render() {
        return (
            <div className="centreMe">
                <ScheduleComponent currentView='Month' eventSettings={{ dataSource: this.data }} views={['Month']}>
                    <Inject services={[Month]}/>
                </ScheduleComponent>
                
                <a href="/calender">View Full Calendar</a>
            </div>
        );
    }
}

export default Calendar;