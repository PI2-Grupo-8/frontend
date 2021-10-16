import axios from 'axios';

const {
  REACT_APP_VEHICLE_API,
  REACT_APP_SENSORS_DATA_API
} = process.env

export const vehicleAPI = axios.create({
  baseURL: REACT_APP_VEHICLE_API,
});

export const sensorsDataAPI = axios.create({
  baseURL: REACT_APP_SENSORS_DATA_API,
});