import axios from 'axios';

const baseURL_dev = 'http://localhost:3000';
const baseURL_production = '';

const api = axios.create({
    baseURL: baseURL_production
});

export default api;