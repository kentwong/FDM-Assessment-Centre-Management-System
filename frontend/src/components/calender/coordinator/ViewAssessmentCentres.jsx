import React, {Component} from 'react'
// USED FOR DISPLAYING A WARNING FOR MISSING PARAMETERS
class ViewAssessmentCentres extends Component{
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div>
                <hr/><b className="text-danger">ALL FIELDS REQUIRED*</b><hr/>
            </div>
        )
    }
}

export default ViewAssessmentCentres