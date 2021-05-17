const actions = {
  GET_PROFILE: "GET_PROFILE",
  PROFILE_ERROR: "PROFILE_ERROR",
  CLEAR_PROFILE: "CLEAR_PROFILE",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  getProfile: (data) => {
    return {
      type: actions.GET_PROFILE,
      payload: data,
    };
  },
  updateProfile: (data) => {
    return {
      type: actions.UPDATE_PROFILE,
      payload: data,
    };
  },
  profileError: (data) => {
    return {
      type: actions.PROFILE_ERROR,
      payload: data,
    };
  },
  clearProfile: () => {
    return {
      type: actions.CLEAR_PROFILE,
    };
  },
};

export default actions;
