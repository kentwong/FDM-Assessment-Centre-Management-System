import axios from 'axios';

const STAFF_API_URL = "http://localhost:9003/staff/api/v1";

class StaffService {

    getStaff() {
        return axios.get(STAFF_API_URL + '/login');
    }

    sendDetails(LoginDetails) {
        return axios.post(STAFF_API_URL + '/login', LoginDetails, { header: { "Content-Type": "application/json" } });
    }

    getStaffById(id) {
        return axios.get(STAFF_API_URL + '/id/' + id)
    }

    updateStaff(staff) {
        return axios.put(STAFF_API_URL + '/update', staff);
    }

}

export default new StaffService();