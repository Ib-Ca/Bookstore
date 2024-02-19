import axios from "axios";

/* Iniciar Sesión */
export function login(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/session`,
        data,
        { withCredentials: true }
      );
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

/*Registrar usuario */
export function register(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/user`,
        data,
        { withCredentials: true }
      );
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

/*Recover Contraseña */
export function passwordResetToken(params = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/user/resetPassword`,
        {
          params: params,
          withCredentials: true,
        }
      );
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
export function passwordReset(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_DOMAIN}/user/resetPassword`,
        data,
        {
          withCredentials: true,
        }
      );
      const result = await response.data;
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
