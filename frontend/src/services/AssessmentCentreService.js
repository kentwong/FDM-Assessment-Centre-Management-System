import axios from 'axios';

const ASSESSMENT_CENTRE_API_URL = "http://localhost:9003/assessmentCentre/api/v1";

class AssessmentCentreService {

    getAssessmentCentres() {
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/all');
    }

    getCandidates() {
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/candidates');
    }

    getInterviewers(){
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/allInterviewers')
    }

    sendCoordinatorID(userID){
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/setAC', {userID});
    }

    sendIds(selectedCandidates, selectedInterviewers, startDate, endDate){
        axios.post(ASSESSMENT_CENTRE_API_URL + '/startDate', startDate)
        axios.post(ASSESSMENT_CENTRE_API_URL + '/endDate', endDate)
        axios.post(ASSESSMENT_CENTRE_API_URL + '/acCandidates', selectedCandidates)
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/acInterviewers', selectedInterviewers)
    }

    getSelectedCandidates(){
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/selectedCandidates')
    }

    getSelectedInterviewers(){
        return axios.get(ASSESSMENT_CENTRE_API_URL + '/selectedInterviewers')
    }

    createAssessmentCentre(details){
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/createAC', details)
    }

    updateAssessmentCentreDates(dates){
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/updateAC', dates)
    }

    deleteAssessmentCentre(acID){
        return axios.post(ASSESSMENT_CENTRE_API_URL + '/deleteAC', {acID})
    }
    
    
}

export default new AssessmentCentreService();