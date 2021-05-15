const actions = {
  GET_PROFILE: "GET_PROFILE",
  PROFILE_ERROR: "PROFILE_ERROR",

  getProfile: (data) => {
    return {
      type: actions.GET_PROFILE,
      payload: data,
    };
  },
  profileError: (data) => {
    return {
      type: actions.PROFILE_ERROR,
      payload: data,
    };
  },
};

export default actions;
