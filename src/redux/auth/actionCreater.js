import { setAlert } from "../alerts/actionCreater";
import actions from "./actions";
import authService from "../../services/authService";

const { registerSuccess, registerFail } = actions;

const registerUser = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      const user = { name, email, password };
      console.log(user);
      const res = await authService.registerUser(user);
      if (res.data) dispatch(registerSuccess(res.data.token, res.data.user));
    } catch (err) {
      console.log(err.response.data.errors);
      err.response.data.errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });

      dispatch(registerFail());
    }
  };
};

export { registerUser };
