import React from 'react'
import AssessmentCentreService from '../../../services/AssessmentCentreService'

var user = {
    id: 1,
	firstName: 'Michael',
	lastName: 'Mike',
	email: 'email@fdm.com',
	phoneNumber: '123456',
}
localStorage.setItem('coordinator', JSON.stringify(user))

const CreateAC = () => {

    const coordinator = localStorage.getItem('coordinator')
    return (
    <div>
        AC COORDINATOR: {coordinator}
    </div>
    )
}

export default CreateAC