import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/',//backend url 
});

export default axiosClient;