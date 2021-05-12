const actions = {
  SET_ALERT: "SET_ALERT",
  REMOVE_ALERT: "REMOVE_ALERT",

  fetchAlert: (id,msg, alertType) => {
    return {
      type: actions.SET_ALERT,
      payload: { id, msg, alertType },
    };
  },
};

export default actions;
