/* eslint-disable no-useless-constructor */
import { axiosInstance } from "../@axios";

class ProfileService {
  async getCurrentUser() {
    const url = `/api/profile/me`;
    return await axiosInstance.get(url);
  }
  async createProfile(data) {
    const url = `/api/profile`;
    return await axiosInstance.post(url, data);
  }
  async addExperience(data) {
    const url = `/api/profile/experience`;
    return await axiosInstance.put(url, data);
  }
  async addEduction(data) {
    const url = `/api/profile/education`;
    return await axiosInstance.put(url, data);
  }
}

const profileService = new ProfileService();

export default profileService;
