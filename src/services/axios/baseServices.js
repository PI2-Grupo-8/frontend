import axios from 'axios';

const { REACT_APP_DATA_SENSORS_API, REACT_APP_VEHICLE_API } = process.env

export const vehicleAPI = axios.create({
  baseURL: REACT_APP_VEHICLE_API,
});

export const sensorsAPI = axios.create({
  baseURL: REACT_APP_DATA_SENSORS_API,
});
