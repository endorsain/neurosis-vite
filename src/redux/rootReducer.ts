import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "../auth";
import { UserReducer } from "../user";
import { AccessReducer } from "../access";

const rootReducer = combineReducers({
  access: AccessReducer,
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
