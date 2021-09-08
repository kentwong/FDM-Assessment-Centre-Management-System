import axios from 'axios';

const API_URL = "http://localhost:9003/vincenttest/api/v1";

class CandidateService {

    w() {
        return axios.get(API_URL + '/');
    }
}

export default new CandidateService();