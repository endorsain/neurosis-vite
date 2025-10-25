import { createSlice } from "@reduxjs/toolkit";
import { thunkHandlers } from "./handler";

const initialState = {
  email: null,
  username: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload;
      state.username = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    Object.entries(thunkHandlers).forEach(([prefix, handler]) => {
      builder
        .addCase(`${prefix}/pending`, handler.pending)
        .addCase(`${prefix}/fulfilled`, handler.fulfilled)
        .addCase(`${prefix}/rejected`, handler.rejected);
    });
  },
});

export const { setUserData } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
