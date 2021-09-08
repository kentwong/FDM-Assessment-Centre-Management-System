import React, {Component} from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

class ViewAssessmentCentres extends Component{
    constructor(props){
        super(props)

        this.state = {
            assessmentCentres: [],
        }
    }

    componentDidMount() {
        AssessmentCentreService.getAssessmentCentres().then((res) => {
            console.log(res.data);
            this.setState({ assessmentCentres: res.data })
        })
    }

    render() {
        return(
            <div>
                <b>Assessment Centres:</b><br/>
                    {this.state.assessmentCentres.map(
                        ac => 
                        <span>
                            Assessment Centre ID - {ac.id}<br/>
                            Date: {ac.date}
                        </span>
                    )}
            </div>
        )
    }
}

export default ViewAssessmentCentres