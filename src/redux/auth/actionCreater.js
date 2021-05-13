import { setAlert } from "../alerts/actionCreater";
import actions from "./actions";
import authService from "../../services/authService";
import setAuthToken from "../../utils/setAuthToken";
const { registerSuccess, registerFail, userLoading, authError } = actions;

const registerUser = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      const user = { name, email, password };
      console.log(user);
      const res = await authService.registerUser(user);
      if (res.data) dispatch(registerSuccess(res.data.token));
    } catch (err) {
      console.log(err.response.data.errors);
      err.response.data.errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
      dispatch(registerFail());
    }
  };
};
const loadUser = () => {
  return async (dispatch) => {
    if (localStorage.token) setAuthToken(localStorage.token);
    try {
      const res = await authService.loadUser();
      console.log(res.data);
      dispatch(userLoading(res.data));
    } catch (error) {
      dispatch(authError());
    }
  };
};

export { registerUser, loadUser };
