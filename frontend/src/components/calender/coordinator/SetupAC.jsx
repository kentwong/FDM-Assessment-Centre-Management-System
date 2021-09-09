import React from 'react'

const SetupAC = () => {

    return (
        <div>
            <label for="interviewTypes">Choose Interview Type:</label><br/>
            <select name="interviewTypes">
                <option value="General">General</option>
                <option value="Technical">Technical</option>
                <option value="Behavioural">Behavioural</option>
                <option value="Curveball">Curveball</option>
            </select>
        </div>
    )
}

export default SetupAC