import axios from 'axios';

const baseURL_dev = 'http://localhost:3000';
const baseURL_production = 'https://growthtech-postsfinder.herokuapp.com';

const api = axios.create({
    baseURL: baseURL_dev,
    timeout: 20000
});

export default api;