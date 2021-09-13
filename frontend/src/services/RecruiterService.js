import axios from 'axios';

const RECRUITER_API_URL = "http://localhost:9003/recruiter/api/v1";

class RecruiterService {

    getRecruiters() {
        return axios.get(RECRUITER_API_URL + '/all');
    }

    createRecruiter(recruiter) {
        return axios.post(RECRUITER_API_URL + '/create', recruiter);
    }

    getRecruiterById(recruiterId) {
        return axios.get(RECRUITER_API_URL + '/id/' + recruiterId)
    }

    updateRecruiter(recruiter, recruiterId) {
        return axios.put(RECRUITER_API_URL + '/id/' + recruiterId, recruiter);
    }

    deleteRecruiter(recruiterId) {
        return axios.delete(RECRUITER_API_URL + '/id/' + recruiterId);
    }
}

export default new RecruiterService();