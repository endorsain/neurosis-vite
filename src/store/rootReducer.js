import { combineReducers } from '@reduxjs/toolkit';
import {
  activitiesReducer,
  authUserReducer,
  getGeneralDataReducer,
  userAccessReducer,
} from './slices';

const rootReducer = combineReducers({
  user_access: userAccessReducer,
  auth_user: authUserReducer,
  get_general_data: getGeneralDataReducer,
  activities: activitiesReducer,
});

export default rootReducer;
