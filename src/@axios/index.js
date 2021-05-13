import axios from "axios";
import config from "../config/config";

const headers = {
  "Content-Type": "application/json",
};
const axiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  headers,
});
export default axiosInstance;
