import actions from "./actions";
import { setAlert } from "../alerts/actionCreater";
import profileService from "../../services/profileService";
const { getProfile, profileError, clearProfile, updateProfile } = actions;

const getCurrentProfile = () => {
  return async (dispatch) => {
    try {
      const res = await profileService.getCurrentUser();
      dispatch(getProfile(res.data));
    } catch (error) {
      dispatch(
        profileError({
          msg: error.response.statusText,
          status: error.response.status,
        })
      );
    }
  };
};

const clearProfiles = () => {
  return async (dispatch) => {
    dispatch(clearProfile());
  };
};

const createProfile = (FormData, history, edit = false) => {
  return async (dispatch) => {
    try {
      const res = await profileService.createProfile(FormData);
      dispatch(getProfile(res.data));
      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );
      if (!edit) history.push("/dashboard");
    } catch (error) {
      const err = error.response.data.errors;
      console.log(err);
      if (err)
        err.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      dispatch(
        profileError({
          msg: error.response.statusText,
          status: error.response.status,
        })
      );
    }
  };
};

const addExperience = (FormData, history) => {
  return async (dispatch) => {
    try {
      const res = await profileService.createProfile(FormData);
      dispatch(updateProfile(res.data));
      dispatch(setAlert("Experience Added", "success"));
      history.push("/dashboard");
    } catch (error) {
      const err = error.response.data.errors;
      if (err)
        err.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      dispatch(
        profileError({
          msg: error.response.statusText,
          status: error.response.status,
        })
      );
    }
  };
};
const addEducation = (FormData, history) => {
  return async (dispatch) => {
    try {
      const res = await profileService.createProfile(FormData);
      dispatch(updateProfile(res.data));
      dispatch(setAlert("Education Added", "success"));
      history.push("/dashboard");
    } catch (error) {
      const err = error.response.data.errors;

      if (err)
        err.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      dispatch(
        profileError({
          msg: error.response.statusText,
          status: error.response.status,
        })
      );
    }
  };
};

export {
  getCurrentProfile,
  clearProfiles,
  createProfile,
  addExperience,
  addEducation,
};
