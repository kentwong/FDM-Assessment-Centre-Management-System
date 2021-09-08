import React, {Component} from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

class ViewAssessmentCentres extends Component{
    constructor(props){
        super(props)

        this.state = {
            assessmentCentres: []
        }
    }

    componentDidMount(){
        AssessmentCentreService.getAssessmentCentres().then((res) => {
            console.log(res.data)
            this.setState({ assessmentCentres: res.data })
        })
    }

    render(){
        return(
            <div>
                {this.state.assessmentCentres.map(
                    assessmentCentre =>
                    <div>
                        <span>Assessment Centre ID - {assessmentCentre.id}</span><br/>
                    </div>
                )}
            </div>
        )
    }
}

export default ViewAssessmentCentres