import { createSlice } from "@reduxjs/toolkit";
import { UserThunks } from "../UserThunks";
import {
  getGeneralDataThunkFulfilled,
  handlePending,
  handleRejected,
} from "./utils";

const initialState = {
  email: null,
  username: null,
  loading: false,
  error: null,
};

const fulfilledHandlers = {
  [UserThunks.getGeneralData.typePrefix]: getGeneralDataThunkFulfilled,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload;
      state.username = action.payload;
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

const UserReducer = UserSlice.reducer;
export const { setUserData } = UserSlice.actions;

export default UserReducer;
