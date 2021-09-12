import axios from 'axios';

const ASSESSMENT_CENTRE_API_URL = "http://localhost:9003/assessmentCentre/api/v1";

class AssessmentCentreService {

    getAssessmentCentres() {
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/all');
    }

    getInterviewers(){
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/allInterviewers')
    }

    sendCoordinatorID(userID){
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/setAC', {userID});
    }

    sendIds(selectedCandidates, selectedInterviewers){
        axios.post(ASSESSMENT_CENTRE_API_URL + '/acCandidates', selectedCandidates)
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/acInterviewers', selectedInterviewers)
    }

    getSelectedCandidates(){
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/selectedCandidates')
    }

    getSelectedInterviewers(){
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/selectedInterviewers')
    }



    // getCoordinatorAssessmentCentres(coordinator, coordinatorId) {
    //     return axios.get(ASSESSMENT_CENTRE_API_URL + '/all/' + coordinatorId, coordinator);
    // }

    // createAssessmentCentre(assessmentCentre) {
    //     return axios.post(ASSESSMENT_CENTRE_API_URL + '/create', assessmentCentre);
    // }

    // getAssessmentCentreById(assessmentCentreId) {
    //     return axios.get(ASSESSMENT_CENTRE_API_URL + '/' + assessmentCentreId)
    // }

    // updateAssessmentCentres(assessmentCentre, assessmentCentreId) {
    //     return axios.put(ASSESSMENT_CENTRE_API_URL + '/update/' + assessmentCentreId, assessmentCentre);
    // }

    // deleteAssessmentCentre(assessmentCentresId) {
    //     return axios.delete(ASSESSMENT_CENTRE_API_URL + '/delete/' + assessmentCentresId);
    // }
}

export default new AssessmentCentreService();