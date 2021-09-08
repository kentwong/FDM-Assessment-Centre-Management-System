import React from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

const CreateAC = () => {

    const coordinator = localStorage.getItem('coordinator')
    return (
    <div>
        <hr/>
        AC COORDINATOR: {coordinator}<br/>
        

    </div>
    )
}

export default CreateAC