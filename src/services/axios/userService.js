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

export const updateUser = async (
  { name, email, password }
) => {
  try {
    const response = await userAPI.put('/update', {
      name, email, password
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error)
    return { success: false, data: error.response.data };
  }
}

export const forgotPassword = async (
  email
) => {
  try {
    const response = await userAPI.post('/forgot_password', {
      email
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error)
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
    console.log(error);
    return { success: false, data: error.response.data };
  }
}

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await userAPI.post('/reset_password', {
      token, newPassword
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, data: error.response.data };
  }
}

