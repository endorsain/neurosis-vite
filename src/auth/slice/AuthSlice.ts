import { createSlice } from "@reduxjs/toolkit";
import { UserThunks } from "../../user";
import {
  getGeneralDataThunkFulfilled,
  handlePending,
  handleRejected,
} from "./utils";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const fulfilledHandlers = {
  [UserThunks.getGeneralData.typePrefix]: getGeneralDataThunkFulfilled,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      if (action.payload === true) {
        state.error = null;
      }
    },
  },
  extraReducers: (builder: any) => {
    Object.entries(fulfilledHandlers).forEach(
      ([thunkPrefix, fulfilledHandler]) => {
        builder
          .addCase(`${thunkPrefix}/pending`, handlePending)
          .addCase(`${thunkPrefix}/fulfilled`, fulfilledHandler)
          .addCase(`${thunkPrefix}/rejected`, handleRejected);
      }
    );
  },
});

const AuthReducer = AuthSlice.reducer;
export const { setAuthenticated } = AuthSlice.actions;

export default AuthReducer;
