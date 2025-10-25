import { combineReducers } from "@reduxjs/toolkit";
import { SettingsReducer } from "../components/settings/SettingsSlice";
import { UserReducer } from "../user";
import { AccessReducer } from "../access";
import { AuthReducer } from "../auth";

const rootReducer = combineReducers({
  access: AccessReducer,
  user: UserReducer,
  auth: AuthReducer,
  settings: SettingsReducer,
});

export default rootReducer;
