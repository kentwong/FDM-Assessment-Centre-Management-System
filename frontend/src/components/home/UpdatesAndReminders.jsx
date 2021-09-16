import React, { Component } from 'react';
import AssessmentCentreService from '../../services/AssessmentCentreService';


class UpdatesAndReminders extends Component {
    constructor(props){
        super(props)

       
    }

    componentDidMount() {
        AssessmentCentreService.getAssessmentCentres().then((res) => {
            
            //this.setState({ candidatesOverviewData: res.data })
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center' >Updates And Reminders</h2>
                
            </div>
        );
    }
}

export default UpdatesAndReminders;