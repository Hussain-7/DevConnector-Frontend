import actions from "./actions";

const { REGISTER_FAIL, REGISTER_SUCCESS } = actions;

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};
/**
 * @todo impure state mutation/explaination
 */

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REGISTER_SUCCESS: {
      console.log("============REGISTER SUCCESS============");
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case REGISTER_FAIL: {
      console.log("============REGISTER FAIL============");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
