import { createSlice } from '@reduxjs/toolkit';
import { getGeneralDataThunk, logOutThunk, signInThunk } from '../../thunks';
import {
  handleGetGeneralDataFulfilled,
  handleLogOutFulfilled,
  handlePending,
  handleRejected,
  handleSignInFulfilled,
} from './utils';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const thunkHandlers = {
  [signInThunk.typePrefix]: handleSignInFulfilled,
  [logOutThunk.typePrefix]: handleLogOutFulfilled,
  [getGeneralDataThunk.typePrefix]: handleGetGeneralDataFulfilled,
};

const authUserSlice = createSlice({
  name: 'authUserSlice',
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
