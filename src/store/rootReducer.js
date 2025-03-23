import { combineReducers } from '@reduxjs/toolkit';
import {
  authUserReducer,
  getGeneralDataReducer,
  userAccessReducer,
} from './slices';

const rootReducer = combineReducers({
  user_access: userAccessReducer,
  auth_user: authUserReducer,
  get_general_data: getGeneralDataReducer,
});

export default rootReducer;
