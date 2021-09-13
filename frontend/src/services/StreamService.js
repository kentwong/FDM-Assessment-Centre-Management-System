import axios from 'axios';

const STREAM_API_URL = "http://localhost:9003/stream/api/v1";

class StreamService {

    getStreams() {
        return axios.get(STREAM_API_URL + '/all');
    }

    createStream(stream) {
        return axios.post(STREAM_API_URL + '/create', stream);
    }

    getStreamById(streamId) {
        return axios.get(STREAM_API_URL + '/id/' + streamId)
    }

    updateStream(stream, streamId) {
        return axios.put(STREAM_API_URL + '/id/' + streamId, stream);
    }

    deleteStream(streamId) {
        return axios.delete(STREAM_API_URL + '/id/' + streamId);
    }
}

export default new StreamService();