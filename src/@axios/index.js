import axios from "axios";
import config from "../config/config";
const headers = {
  "Content-Type": "application/json",
  common: {},
};
const axiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  headers,
});

const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axiosInstance.defaults.headers.common["x-auth-token"];
  }
  // console.log(axios.defaults);
};
export { axiosInstance, setAuthToken };
