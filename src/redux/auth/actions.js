const actions = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",

  registerSuccess: (token, user) => {
    return {
      type: actions.REGISTER_SUCCESS,
      payload: { token, user },
    };
  },
  registerFail: () => {
    return {
      type: actions.REGISTER_FAIL,
    };
  },
};

export default actions;
