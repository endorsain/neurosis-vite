import { combineReducers } from "@reduxjs/toolkit";
import { AccessReducer } from "./access";
import { UserReducer } from "./user";
import { AuthReducer } from "./auth";
import { SettingReducer } from "./setting";
import { PageLayoutReducer } from "./ui";

const rootReducer = combineReducers({
  access: AccessReducer,
  user: UserReducer,
  auth: AuthReducer,
  setting: SettingReducer,
  /* TODO: Test */
  pageLayout: PageLayoutReducer,
});

export default rootReducer;
