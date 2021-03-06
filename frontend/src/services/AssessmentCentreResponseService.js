import axios from 'axios';

const ASSESSMENT_CENTRE_RESPONSE_API_URL = "http://localhost:9003/assessmentCentreResponse/api/v1";

class AssessmentCentreResponseService {

    getAssessmentCentreResponses() {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/all');
    }

    getAssessmentCentreResponseGrouped() {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/groupResponses');
    }

    getAssessmentCentreResponseGroupedOneForId(candidateId) {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/groupResponse/' + candidateId);
    }

    getAssessmentCentreResponseGroupedForIdOnlyGeneral(candidateId) {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/general/' + candidateId);
    }

    getAssessmentCentreResponseGroupedForIdOnlyTechnical(candidateId) {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/technical/' + candidateId);
    }

    getAssessmentCentreResponseGroupedForIdOnlyBehavioural(candidateId) {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/behavioural/' + candidateId);
    }

    getAllQuestions(){
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/getAllQuestions');
    }

    getResponsesByCandidateInterviewer(id, interviewerId){
        const params = new URLSearchParams([['candidateId', id], ['interviewerId', interviewerId]]);
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/getByCandidateInterviewer/', { params } );
    }

    getAssessmentCentreResponseById(candidateId) {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/info/' + candidateId)
    }

    updateAssessmentCentreResponse(acResponse, acId) {
        return axios.put(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/updateACResponse/' + acId, acResponse);
    }

}

export default new AssessmentCentreResponseService();