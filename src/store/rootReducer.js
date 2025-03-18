import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import userAccessReducer from './user-access/user-access.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  user_access: userAccessReducer,
});

export default rootReducer;
