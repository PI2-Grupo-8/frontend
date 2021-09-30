import axios from 'axios';

export const vehicleAPI = axios.create({
  baseURL: 'http://localhost:3001/',
});