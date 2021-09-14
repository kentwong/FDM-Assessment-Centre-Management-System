import axios from 'axios';

const HOMEPAGE_API_URL = "http://localhost:9003/home/api/v1";

class HomePageService {

    getAssessmentCentreResponsesHome() {
        return axios.get(HOMEPAGE_API_URL + '/home');
    }


}

export default new HomePageService();