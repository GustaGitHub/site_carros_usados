import axios from 'axios';

const api = axios.create({
 baseURL: 'http://localhost:12000/'
});

export default api;