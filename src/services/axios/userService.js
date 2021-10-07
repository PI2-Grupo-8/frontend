import { userAPI } from './baseServices';

export const createUser = async (
  name, email, password
) => {
  try {
    const response = await userAPI.post('/register', {
      name, email, password
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.response.data };
  }
}


export const login = async (
  email, password
) => {
  try {
    const response = await userAPI.post('/login', {
      email, password
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.response.data };
  }
}
