const actions = {
  GET_PROFILE: "GET_PROFILE",
  GET_PROFILES: "GET_PROFILES",
  GET_REPOS:"GET_REPOS",
  PROFILE_ERROR: "PROFILE_ERROR",
  CLEAR_PROFILE: "CLEAR_PROFILE",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  getProfile: (data) => {
    return {
      type: actions.GET_PROFILE,
      payload: data,
    };
  },
  getProfiles: (data) => {
    return {
      type: actions.GET_PROFILES,
      payload: data,
    };
  },
  getRepos: (data) => {
    return {
      type: actions.GET_REPOS,
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
