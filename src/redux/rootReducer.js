import { combineReducers } from "redux";
import alertReducer from "./alerts/reducer";
import authReducer from "./auth/reducer";

const rootReducers = combineReducers({
  alerts: alertReducer,
  auth: authReducer,
});

export default rootReducers;
