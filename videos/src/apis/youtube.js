import axios from 'axios';

const KEY = 'AIzaSyCt1ste8cSlBArQS_FSbcrznH35lKBWMQ8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
