import actions from "./actions";
import { setAlert } from "../alerts/actionCreater";
import { accountDeleted } from "../auth/actionCreater";
import profileService from "../../services/profileService";
const {
  getProfile,
  getProfiles,
  getRepos,
  profileError,
  clearProfile,
  updateProfile,
} = actions;

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

const getProfileById = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(clearProfile());
      const res = await profileService.getProfileById(userId);
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

const getAllProfiles = () => {
  return async (dispatch) => {
    try {
      dispatch(clearProfile());
      const res = await profileService.getAllProfiles();
      dispatch(getProfiles(res.data));
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
const getGithubRepos = (username) => {
  return async (dispatch) => {
    try {
      console.log(username);
      const res = await profileService.getGithubRepos(username);
      dispatch(getRepos(res.data.Repos));
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
      const res = await profileService.addExperience(FormData);
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

const removeExperience = (expId) => {
  return async (dispatch) => {
    try {
      const res = await profileService.deleteExperience(expId);
      dispatch(updateProfile(res.data));
      dispatch(setAlert("Experience Removed"));
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
      const res = await profileService.addEduction(FormData);
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
const removeEducation = (edId) => {
  return async (dispatch) => {
    try {
      const res = await profileService.deleteEducation(edId);
      dispatch(updateProfile(res.data));
      dispatch(setAlert("Education Removed"));
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

const deleteAccount = () => {
  if (window.confirm("Are you sure? This cannot be undone!"))
    return async (dispatch) => {
      try {
        await profileService.deleteProfile();
        dispatch(clearProfile());
        dispatch(accountDeleted());
        dispatch(setAlert("Your Account has been permanantly deleted"));
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
  else
    return async (dispatch) => {
      return;
    };
};

export {
  getCurrentProfile,
  clearProfiles,
  createProfile,
  addExperience,
  addEducation,
  removeExperience,
  removeEducation,
  deleteAccount,
  getProfileById,
  getAllProfiles,
  getGithubRepos,
};
