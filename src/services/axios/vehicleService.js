import { vehicleAPI } from './baseServices';

export const createVehicle = async (
  name, description, fertilizer, fertilizerAmount, code
) => {
  try {
    const response = await vehicleAPI.post('vehicle/create', {
      owner: "61411790de1c603fc8596ea9",
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
    const response = await vehicleAPI.put(`vehicle/update/${id}`, {
      owner: "61411790de1c603fc8596ea9",
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
  const userID = "61411790de1c603fc8596ea9"
  try {
    const response = await vehicleAPI.get(`vehicles/owner/${userID}`)

    if (!response.data) throw Error;

    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, data: error.response };
  }
}
