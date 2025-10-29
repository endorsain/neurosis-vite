import { createSlice } from "@reduxjs/toolkit";
import { thunkHandlers } from "./handler";

// Ademas del ui tambien tiene que agrupar los "paths"
const initialState = {
  google_loaded: false,
  google_credential: null,
  ui: {
    view: "login",
    // loading_request: false,
  },
  loading_request: false, // Se repite en UI
  response: null,
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
    setChangeView: (state, action) => {
      if (state.ui.view !== action.payload) {
        if (state.ui.view === "google") {
          state.google_credential = null;
        }
        state.response = null;
        state.ui.view = action.payload;
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

const { setGoogleLoaded, setGoogleCredential, setChangeView } =
  AccessSlice.actions;

export const AccessAction = {
  setGoogleLoaded,
  setGoogleCredential,
  setChangeView,
};

export const AccessReducer = AccessSlice.reducer;
