import React, { Component } from 'react';
import {Inject, ScheduleComponent, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

class Calendar extends Component {
    constructor(props){
        super(props)

        this.data =  [{
            Id: 1,
            Subject: 'FIRST TEST',
            StartTime: new Date(2021, 8, 15),
            EndTime: new Date(2021, 8, 15)
        }, {
            Id: 2,
            Subject: 'SECOND TEST',
            StartTime: new Date(2021, 8, 12, 12, 0),
            EndTime: new Date(2021, 8, 12, 14, 0)
        }, {
            Id: 3,
            Subject: 'THIRD TEST',
            StartTime: new Date(2021, 8, 13, 9, 30),
            EndTime: new Date(2021, 8, 13, 11, 0)
        }, {
            Id: 4,
            Subject: 'FOURTH TEST',
            StartTime: new Date(2021, 8, 14, 13, 0),
            EndTime: new Date(2021, 8, 14, 14, 30)
        }];
       
    }

    render() {
        return (
            <div className="centreMe">
                <ScheduleComponent height="390" >
                    <ViewsDirective>
                        <ViewDirective option='Month'></ViewDirective>
                    </ViewsDirective>
                    <Inject services={[Month]}/>
                </ScheduleComponent>
                
                <a href="/calender">View Full Calendar</a>
            </div>
        );
    }
}

export default Calendar;