import React, { useState, Component } from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import ViewAssessmentCentres from './coordinator/ViewAssessmentCentres';
import CreateAC from './coordinator/CreateAC';
import AssessmentCentreService from '../../services/AssessmentCentreService'
import { L10n } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Save',
            'cancelButton': 'Close',
            'deleteButton': 'Delete',
            'newEvent': 'Add Event',
        },
    }
});

const shouldDisplayCreateAC = localStorage.getItem('role') === 'ACCoordinator'

class CalenderIndexPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          showCreate: false,
          readOnly: true,
        //   updateStart: null,
        //   updateEnd: null,
        };
        this.startDateHandler = this.startDateHandler.bind(this)
        this.endDateHandler = this.endDateHandler.bind(this)

        this.data =  [{
                Id: 1,
                Subject: '2/9 Assessment Centre',
                StartTime: new Date(2021, 8, 2, 12, 0),
                EndTime: new Date(2021, 8, 2, 14, 0),
                Description: 'Candidates: Mike Evans; Chris Godwin; Travis Kelce; Jason Kelce; Aaron Donald; ',
                IsReadonly: !shouldDisplayCreateAC,
            }, {
                Id: 2,
                Subject: '7/9 Assessment Centre',
                StartTime: new Date(2021, 8, 7, 9, 30),
                EndTime: new Date(2021, 8, 7, 11, 0),
                Description: 'Candidates: Thomas Edward; Patrick Brady; Aaron Rodgers; Drew Brees; Patrick Mahomes; ',
                IsReadonly: !shouldDisplayCreateAC,
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
                    IsReadonly: !shouldDisplayCreateAC,
                }
                this.data.push(acTemplate)
            })
        })

        window.setTimeout(5000)
    }

    startDateHandler(e) {
        // console.log("UPDATED START - " + e.target.value)
        // this.setState({ updateStart: e.target.value })
        // console.log(this.state.updateStart)
    }

    endDateHandler(e) {
        // console.log("UPDATED END - " + e.target.value)
        // this.setState({ updateEnd: e.target.value })
        // console.log(this.state.updateEnd)
    }

    editorWindowTemplate(props) {
        return (
            <table className="custom-event-editor" style={{width: '100%'}}>
                <tbody>
                    <tr>
                        <td className="e-textlabel">Name</td>
                        <td><input type="text" className="e-field e-input" id="Subject" name="Subject"/></td>
                    </tr>
                    <tr>
                        <td className="e-textlabel">From</td>
                        <td><DateTimePickerComponent className="e-field" id="StartTime" data-name="StartTime" 
                             format="dd/MM/yy hh:mm a" onChange={this.startDateHandler}></DateTimePickerComponent>
                        </td> {/* value={props.StartTime} */}
                    </tr>
                    <tr>
                        <td className="e-textlabel">To</td>
                        <td><DateTimePickerComponent className="e-field" id="EndTime" data-name="EndTime" 
                             format="dd/MM/yy hh:mm a" onChange={this.endDateHandler}></DateTimePickerComponent>
                        </td> {/* value={props.EndTime} */}
                    </tr>

                    <tr>
                        <td className="e-textlabel">Description</td>
                        <td>
                            <input type="text" className="e-field e-input" id="Description" name="Description" readOnly={true}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    onPopupClose(args) {
        // only runs when SAVE button is pressed
        if (args.type === 'Editor' && args.data) {
            console.log("ARGS: " + JSON.stringify(args.data))
            this.updateAC(args)
        }
        if (args.type === 'DeleteAlert'){
            this.deleteAC(args)
        }
    }

    updateAC = (args) => {
        this.data.map(ac => {
            if (args.data.Description === ac.Description){
                let dates = {
                    id: ac.Id,
                    start: args.data.StartTime,
                    end: args.data.EndTime,
                }
                console.log(ac.Id)
                // console.log("UPDATED: " + JSON.stringify(dates))
                AssessmentCentreService.updateAssessmentCentreDates(dates)
            }
        })
    }

    deleteAC = (args) => {
        console.log("DELETE: " + JSON.stringify(args.data))
        // AssessmentCentreService.sendCoordinatorID(localStorage.getItem('user'))

        let deleteAC = {
            coordinator: localStorage.getItem('user'),
            acID: JSON.stringify(args.data.Id),
        }

        AssessmentCentreService.deleteAssessmentCentre(deleteAC)
    }

    addCandidate = () => {
        alert("Editing candidates list")
    }

    displayCreateACHandler = () => {
        this.setState({ showCreate: !this.state.showCreate })
    }

    render() {
        return (
            <div className="custom-container">
                <ScheduleComponent currentView='Month' eventSettings={{ dataSource: this.data }} views={['Day', 'Week', 'Month']} editorTemplate={this.editorWindowTemplate.bind(this)} 
                    popupClose={this.onPopupClose.bind(this)}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
                
                <br/>
                { shouldDisplayCreateAC && <button className="btn btn-primary" onClick={this.displayCreateACHandler}>Create Assessment Centre</button>}
                { this.state.showCreate && <CreateAC />}
                
            </div>
        );
    }
}

export default CalenderIndexPage;