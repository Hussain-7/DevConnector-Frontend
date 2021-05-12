import actions from "./actions";

const { SET_ALERT, REMOVE_ALERT } = actions;

const initialState = [];
/**
 *
 * @todo impure state mutation/explaination
 */
const alertReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log("============FETCHING ALERTS============");
  console.log(initialState);
  console.log(action.type);
  switch (type) {
    case SET_ALERT: {
      return [...state, payload];
    }
    case REMOVE_ALERT: {
      return state.filter((alert) => alert.id !== payload);
    }
    default:
      return state;
  }
};

export default alertReducer;
