import { createSlice } from "@reduxjs/toolkit";
import { thunkHandlers } from "./handler";
import { PATHS } from "../../../shared";

// Ademas del ui tambien tiene que agrupar los "paths"
const initialState = {
  google_loaded: false,
  google_credential: null,
  // LOADING_REQUEST es buena para todas las request del slice
  loading_request: false, // Se repite en UI
  request_error: null,
  //UI
  UI: {
    views: {
      paths: PATHS.access,
      google_register: false,
    },
    loading_request: false,
  },
};

const AccessSlice = createSlice({
  name: "access_slice",
  initialState,
  reducers: {
    setGoogleLoaded: (state, action) => {
      state.google_loaded = action.payload;
    },
    setGoogleCredential: (state, action) => {
      state.google_credential = action.payload;
    },
    clearGoogleCredential: (state) => {
      state.google_credential = null;
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

export const { setGoogleLoaded, setGoogleCredential, clearGoogleCredential } =
  AccessSlice.actions;

export const AccessReducer = AccessSlice.reducer;
