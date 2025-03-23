import { createSlice } from '@reduxjs/toolkit';
import { getGeneralDataThunk, logoutThunk, signinThunk } from '../../thunks';
import {
  handleGetGeneralDataFulfilled,
  handleLogoutFulfilled,
  handlePending,
  handleRejected,
  handleSigninFulfilled,
} from './utils';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const thunkHandlers = {
  [signinThunk.typePrefix]: handleSigninFulfilled,
  [logoutThunk.typePrefix]: handleLogoutFulfilled,
  [getGeneralDataThunk.typePrefix]: handleGetGeneralDataFulfilled,
};

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      if (action.payload === true) {
        state.error = null;
      }
    },
  },
  extraReducers: builder => {
    Object.entries(thunkHandlers).forEach(
      ([thunkTypePrefix, fulfilledHandler]) => {
        //console.log('ThunkTypePrefix:', thunkTypePrefix);
        builder
          .addCase(`${thunkTypePrefix}/pending`, handlePending)
          .addCase(`${thunkTypePrefix}/fulfilled`, fulfilledHandler)
          .addCase(`${thunkTypePrefix}/rejected`, handleRejected);
      }
    );
  },
});

export const { setAuthenticated } = authUserSlice.actions;
export default authUserSlice.reducer;
