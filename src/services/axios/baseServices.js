import axios from 'axios';

const { REACT_APP_VEHICLE_API } = process.env

export const vehicleAPI = axios.create({
  baseURL: REACT_APP_VEHICLE_API,
});