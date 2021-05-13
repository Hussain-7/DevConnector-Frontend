const actions = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  USER_LOADING: "USER_LOADING",
  AUTH_ERROR: "AUTH_ERROR",

  registerSuccess: (token) => {
    return {
      type: actions.REGISTER_SUCCESS,
      payload: { token },
    };
  },
  registerFail: () => {
    return {
      type: actions.REGISTER_FAIL,
    };
  },
  userLoading: (data) => {
    return {
      type: actions.USER_LOADING,
      payload: data,
    };
  },
  authError: () => {
    return {
      type: actions.AUTH_ERROR,
    };
  },
};

export default actions;
