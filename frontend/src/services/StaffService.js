import axios from 'axios';

const STAFF_API_URL = "http://localhost:9003/staff";

class StaffService {

    getStaff() {
        return axios.get(STAFF_API_URL + '/login');
    }
    /*
    createStaff(staff) {
        return axios.post(CANDIDATE_API_URL + '/create', candidate);
    }

    getCandidateById(userId) {
        return axios.get(CANDIDATE_API_URL + '/' + userId)
    }

    updateCandidate(candidate, candidateId) {
        return axios.put(CANDIDATE_API_URL + '/update/' + candidateId, candidate);
    }

    deleteCandidate(candidateId) {
        return axios.delete(CANDIDATE_API_URL + '/delete/' + candidateId);
    }*/
}

export default new StaffService();