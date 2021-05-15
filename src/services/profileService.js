/* eslint-disable no-useless-constructor */
import { axiosInstance } from "../@axios";

class ProfileService {
  async getCurrentUser() {
    const url = `/api/profile/me`;
    return await axiosInstance.get(url);
  }
}

const profileService = new ProfileService();

export default profileService;
