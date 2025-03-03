import { createSlice } from '@reduxjs/toolkit';
import { authThunk, signinThunk, signupThunk } from './thunks';

import {
  handleAuthFulfilled,
  handlePending,
  handleRejected,
  handleSigninFulfilled,
  handleSignupFulfilled,
} from './utils';

const initialState = {
  isAuthenticated: false,
  loading: false,
  success_message: null,
  error: {
    code: null,
    message: null,
  },
};

const thunkHandlers = {
  [signupThunk.typePrefix]: handleSignupFulfilled,
  [signinThunk.typePrefix]: handleSigninFulfilled,
  [authThunk.typePrefix]: handleAuthFulfilled,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearMessage: state => {
      state.success_message = null;
      state.error = {
        code: null,
        message: null,
      };
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

export const { clearMessage } = authSlice.actions;
export default authSlice.reducer;
