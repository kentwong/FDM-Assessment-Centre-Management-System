import axios from 'axios';

const CANDIDATE_API_URL = "http://localhost:9003/candidate/api/v1";

class CandidateService {

    getCandidates() {
        return axios.get(CANDIDATE_API_URL + '/all');
    }

    createCandidate(candidate) {
        return axios.post(CANDIDATE_API_URL + '/create', candidate);
    }

    getCandidateById(userId) {
        return axios.get(CANDIDATE_API_URL + '/id/' + userId)
    }

    updateCandidate(candidate, candidateId) {
        return axios.put(CANDIDATE_API_URL + '/id/' + candidateId, candidate);
    }

    deleteCandidate(candidateId) {
        return axios.delete(CANDIDATE_API_URL + '/id/' + candidateId);
    }
}

export default new CandidateService();