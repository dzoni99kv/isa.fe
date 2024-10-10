// api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8084', // Set your backend base URL here
});

export default api;
