/*
 * Responsible for using the axios library to 
 * make HTTP requests to the YouTube API
 */

import axios from 'axios';

const KEY = 'AIzaSyDQIl-Xh7X96yFqo8Elz946saOI3fCjl9I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
