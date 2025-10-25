import { createSlice } from "@reduxjs/toolkit";
import { thunkHandlers } from "./handler";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth_slice",
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
    Object.entries(thunkHandlers).forEach(([prefix, handler]) => {
      builder
        .addCase(`${prefix}/pending`, handler.pending)
        .addCase(`${prefix}/fulfilled`, handler.fulfilled)
        .addCase(`${prefix}/rejected`, handler.rejected);
    });
  },
});

export const { setAuthenticated } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;
