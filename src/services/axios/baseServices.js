import axios from 'axios';
import { getToken } from '../auth';

const {
  REACT_APP_VEHICLE_API,
  REACT_APP_SENSORS_DATA_API,
  REACT_APP_AUTH_API
} = process.env

export const vehicleAPI = axios.create({
  baseURL: REACT_APP_VEHICLE_API,
});

export const userAPI = axios.create({
  baseURL: REACT_APP_AUTH_API,
});

export const sensorsDataAPI = axios.create({
  baseURL: REACT_APP_SENSORS_DATA_API,
});

const apis = [vehicleAPI, userAPI, sensorsDataAPI];

apis.forEach(element => {
  element.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  });
});