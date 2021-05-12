import uuid from "uuid/dist/v4";
const actions = {
  SET_ALERT: "SET_ALERT",
  REMOVE_ALERT: "REMOVE_ALERT",

  fetchAlert: (id,msg, alertType) => {
    return {
      type: actions.SET_ALERT,
      payload: { id, msg, alertType },
    };
  },

  removingAlert: (data) => {
    return {
      type: actions.REMOVE_ALERT,
      payload: data,
    };
  },
};

export default actions;
