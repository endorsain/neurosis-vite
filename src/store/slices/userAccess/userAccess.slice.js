import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signUpThunk } from '../../thunks';
import {
  handlePending,
  handleRejected,
  handleSignInFulfilled,
  handleSignUpFulfilled,
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
  [signUpThunk.typePrefix]: handleSignUpFulfilled,
  [signInThunk.typePrefix]: handleSignInFulfilled,
};

const userAccessSlice = createSlice({
  name: 'userAccessSlice',
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
        // console.log('ThunkTypePrefix:', thunkTypePrefix);
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
