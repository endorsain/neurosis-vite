import { combineReducers } from '@reduxjs/toolkit';
import { authUserReducer, getDataReducer, userAccessReducer } from './slices';

const rootReducer = combineReducers({
  user_access: userAccessReducer,
  auth_user: authUserReducer,
  get_data: getDataReducer,
});

export default rootReducer;
