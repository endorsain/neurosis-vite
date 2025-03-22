import { createSlice } from '@reduxjs/toolkit';
import { signinThunk, signupThunk } from '../../thunks';
import {
  handlePending,
  handleRejected,
  handleSigninFulfilled,
  handleSignupFulfilled,
} from './utils';

const initialState = {
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
};

const userAccessSlice = createSlice({
  name: 'userAccess',
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
        console.log('ThunkTypePrefix:', thunkTypePrefix);
        builder
          .addCase(`${thunkTypePrefix}/pending`, handlePending)
          .addCase(`${thunkTypePrefix}/fulfilled`, fulfilledHandler)
          .addCase(`${thunkTypePrefix}/rejected`, handleRejected);
      }
    );
  },
});

export const { clearMessage } = userAccessSlice.actions;
export default userAccessSlice.reducer;
