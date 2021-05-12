import actions from "./actions";

const { SET_ALERT, REMOVE_ALERT } = actions;

const initialState = [];
/**
 *
 * @todo impure state mutation/explaination
 */
const alertReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_ALERT: {
      console.log("============SET ALERT============");
      return [...state, payload];
    }
    case REMOVE_ALERT: {
      console.log("============REMOVE ALERT============");
      return state.filter((alert) => alert.id !== payload);
    }
    default:
      return state;
  }
};

export default alertReducer;
