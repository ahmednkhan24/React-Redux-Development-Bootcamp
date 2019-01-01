import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 98fad2d724f762f0b58c229afe9895103ac6730a6287238d243d9beb81da410a'
    }
});