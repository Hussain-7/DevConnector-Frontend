import actions from "./actions";
import { setAlert } from "../alerts/actionCreater";
import profileService from "../../services/profileService";
const { getProfile, profileError } = actions;

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

export { getCurrentProfile };
