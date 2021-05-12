import actions from "./actions";
import uuid from "uuid/dist/v4";
const { SET_ALERT, REMOVE_ALERT, fetchAlert, removingAlert } = actions;

const setAlert = (msg, alertType) => {
  const id = uuid();
  return async (dispatch) => {
    try {
      dispatch(fetchAlert(id, msg, alertType));
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
    } catch (err) {
      const error = new Error("Problem setting the Alert");
      error.inner = err;
      throw error;
    }
  };
};
const removeAlert = (data) => {
  return async (dispatch) => {
    try {
      //data = alert.id
      dispatch(removingAlert(data));
    } catch (err) {
      const error = new Error("Problem removing the Alert");
      error.inner = err;
      throw error;
    }
  };
};

export { setAlert, removeAlert };
