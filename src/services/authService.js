/* eslint-disable no-useless-constructor */
import axiosInstance from "../@axios";

class AuthService {
  async loginUser(data) {
    const url = `/api/auth`;
    return await axiosInstance.post(url, data);
  }
  async registerUser(data) {
    const url = `/api/users`;
    return await axiosInstance.post(url, data);
  }
}

const authService = new AuthService();

export default authService;
