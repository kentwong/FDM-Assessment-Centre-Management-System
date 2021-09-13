import axios from 'axios';

const HOMEPAGE_RECRUITER_API_URL = "http://localhost:9003/home/api/v1";

class HomePageRecruiterService {

    getAssessmentCentreResponsesHome() {
        return axios.get(HOMEPAGE_RECRUITER_API_URL + '/home');
    }


}

export default new HomePageRecruiterService();