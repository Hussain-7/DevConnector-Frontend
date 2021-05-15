import actions from "./actions";

const { GET_PROFILE, PROFILE_ERROR } = actions;

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
    case GET_PROFILE: {
      return {
        ...state,
        profile: payload,
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
    default:
      return state;
  }
};

export default profileReducer;
