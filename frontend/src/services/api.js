import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        //'auth': localStorage.token,
        //'Content-Type': 'multipart/form-data'
      }
});

export default api;
