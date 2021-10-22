import { vehicleAPI } from './baseServices';
import { getUser } from '../../services/auth';

export const createVehicle = async (
  name, description, fertilizer, fertilizerAmount, code
) => {
  try {
    const user = getUser()
    const response = await vehicleAPI.post('vehicle/create', {
      owner: user._id,
      code,
      name,
      description,
      fertilizer,
      fertilizerAmount
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.response.data };
  }
}

export const getVehicleByID = async (id) => {
  try{
    const response = await vehicleAPI.get(`vehicle/${id}`)

    if(!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const updateVehicle = async (
  id, name, description, fertilizer, fertilizerAmount, code
) => {
  try {
    const user = getUser()
    const response = await vehicleAPI.put(`vehicle/update/${id}`, {
      owner: user._id,
      code,
      name,
      description,
      fertilizer,
      fertilizerAmount
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.response.data };
  }
}

export const deleteVehicle = async (id) => {
  try {
    const response = await vehicleAPI.delete(`vehicle/delete/${id}`)
    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response.data };
  }
}

export const getVehiclesByUser = async () => {
  try {
    const user = getUser()
    const response = await vehicleAPI.get(`vehicles/owner/${user._id}`)

    if (!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const getWorkingVehicle = async (id) => {
  try {
    const response = await vehicleAPI.get(`works/${id}`)

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const startWork = async (id) => {
  try {
    const response = await vehicleAPI.get(`work/create/${id}`)
    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const finishWork = async (id) => {
  try {
    const response = await vehicleAPI.get(`work/finish/${id}`)

    if (!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

export const sendCommand = async (vehicleId, type) => {
  try {
    const response = await vehicleAPI.post('/command/create', {
      vehicleId,
      type
    })

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}

