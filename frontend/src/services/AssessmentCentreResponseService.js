import axios from 'axios';

const ASSESSMENT_CENTRE_RESPONSE_API_URL = "http://localhost:9003/assessmentCentreResponse/api/v1";

class AssessmentCentreResponseService {

    getAssessmentCentreResponses() {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/all');
    }

    getAssessmentCentreResponseGrouped() {
        return axios.get(ASSESSMENT_CENTRE_RESPONSE_API_URL + '/groupResponses')
    }

}

export default new AssessmentCentreResponseService();