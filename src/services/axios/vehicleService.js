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
    console.log(response)

    return response;
  } catch (error) {
    console.log(error)
    window.alert(error);
  }
  return false;
}
