import { combineReducers } from "redux";
import alertReducer from "./alerts/reducer";
import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";

const rootReducers = combineReducers({
  alerts: alertReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default rootReducers;
