import actions from "./actions";

const {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_REPOS,
} = actions;

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

/**
 * @todo impure state mutation/explaination
 */

const profileReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE: {
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    }
    case GET_PROFILES: {
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    }
    case GET_REPOS: {
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    }
    case PROFILE_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }
    case CLEAR_PROFILE: {
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
