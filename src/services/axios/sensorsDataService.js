import { sensorsDataAPI } from './baseServices';

export const getAlertsByVehicle = async (vehicleID, status = 'active') => {
  try {
    const response = await sensorsDataAPI.get(`alerts/vehicle/${vehicleID}/?status=${status}`)

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

export const getAlerts = async () => {
  try {
    const response = await sensorsDataAPI.get(`/alerts?status=all`)

    const closed = []
    const opened = []

    response.data?.forEach(alert => {
      if (alert.finishedAt) {
        closed.push(alert);
      } else {
        opened.push(alert);
      }
    })

    return {
      success: true, data: {
        closed,
        opened
      }
    }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const closeAlert = async (id) => {
  try {
    const response = await sensorsDataAPI.get(`/alert/close/${id}`)

    if (!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}