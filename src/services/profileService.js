/* eslint-disable no-useless-constructor */
import { axiosInstance } from "../@axios";

class ProfileService {
  async getCurrentUser() {
    const url = `/api/profile/me`;
    return await axiosInstance.get(url);
  }
  async getAllProfiles() {
    const url = `/api/profile`;
    return await axiosInstance.get(url);
  }
  async getProfileById(id) {
    const url = `/api/profile/user/${id}`;
    return await axiosInstance.get(url);
  }
  async getGithubRepos(username) {
    const url = `/api/profile/github/${username}`;
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
  async deleteExperience(id) {
    const url = `/api/profile/experience/${id}`;
    console.log(url);
    return await axiosInstance.delete(url);
  }
  async addEduction(data) {
    const url = `/api/profile/education`;
    return await axiosInstance.put(url, data);
  }
  async deleteEducation(id) {
    const url = `/api/profile/education/${id}`;
    console.log(url);
    return await axiosInstance.delete(url);
  }
  async deleteProfile() {
    const url = `/api/profile`;
    return await axiosInstance.delete(url);
  }
}

const profileService = new ProfileService();

export default profileService;
