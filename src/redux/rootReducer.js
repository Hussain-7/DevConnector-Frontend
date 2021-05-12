import { combineReducers } from "redux";
import alertReducer from "./alerts/reducer";

const rootReducers = combineReducers({
  alerts: alertReducer,
});

export default rootReducers;
