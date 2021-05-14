const actions = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  USER_LOADED: "USER_LOADED",
  AUTH_ERROR: "AUTH_ERROR",
  loginSuccess: (token) => {
    return {
      type: actions.LOGIN_SUCCESS,
      payload: { token },
    };
  },
  loginFail: () => {
    return {
      type: actions.LOGIN_FAIL,
    };
  },
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
      type: actions.USER_LOADED,
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
