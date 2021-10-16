import { sensorsDataAPI } from './baseServices';

export const getActiveAlertsByVehicle = async (vehicleID) => {
  try {
    const response = await sensorsDataAPI.get(`alerts/vehicle/${vehicleID}`)

    if (!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const getVehiclesData = async (vehicleID, type) => {
  try {
    const response = await sensorsDataAPI.get(`/data/${vehicleID}/${type}`)

    if (!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}