import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://657ad0f9394ca9e4af12bb3e.mockapi.io/api/v1/services', 
  timeout: 1000000, 
});
