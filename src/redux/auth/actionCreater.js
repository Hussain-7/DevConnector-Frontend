import { setAlert } from "../alerts/actionCreater";
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
} = actions;

const loadUser = () => {
  return async (dispatch) => {
    console.log(localStorage.token);
    if (localStorage.token) setAuthToken(localStorage.token);
    try {
      const res = await authService.loadUser();
      console.log(res.data);
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
      console.log(user);
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
    dispatch(logout());
  };
};

export { registerUser, loadUser, loginUser, logoutUser };
