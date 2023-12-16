import axios from 'axios';

const api = axios.create({
  baseURL: 'https://657ad0f9394ca9e4af12bb3e.mockapi.io/api/v1/services', 
});

export default api;