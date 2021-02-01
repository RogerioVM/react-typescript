import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3412/'
});

export default api;