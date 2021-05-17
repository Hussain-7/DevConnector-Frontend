import { setAlert } from "../alerts/actionCreater";
import { clearProfiles } from "../profile/actionCreater";
import actions from "./actions";
import authService from "../../services/authService";
import { setAuthToken } from "../../@axios/index";
const {
  loginSuccess,
  loginFail,
  logout,
  registerSuccess,
  registerFail,
  userLoading,
  authError,
  removeAccount,
} = actions;

const loadUser = () => {
  return async (dispatch) => {
    if (localStorage.token) setAuthToken(localStorage.token);
    try {
      const res = await authService.loadUser();
      dispatch(userLoading(res.data));
    } catch (error) {
      console.log("AUTH ERROR");
      dispatch(authError());
    }
  };
};
const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const user = { email, password };
      const res = await authService.loginUser(user);
      if (res.data) {
        dispatch(loginSuccess(res.data.token));
        dispatch(loadUser());
      }
    } catch (err) {
      err.response.data.errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
      dispatch(loginFail());
    }
  };
};

const registerUser = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      const user = { name, email, password };
      const res = await authService.registerUser(user);
      if (res.data) {
        dispatch(registerSuccess(res.data.token));
        dispatch(loadUser());
      }
    } catch (err) {
      console.log(err.response.data.errors);
      err.response.data.errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
      dispatch(registerFail());
    }
  };
};

const logoutUser = () => {
  return async (dispatch) => {
    dispatch(clearProfiles());
    dispatch(logout());
  };
};

const accountDeleted = () => {
  return async (dispatch) => {
    dispatch(removeAccount());
  };
};

export { registerUser, loadUser, loginUser, logoutUser, accountDeleted };
