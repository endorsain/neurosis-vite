import { createSlice } from "@reduxjs/toolkit";
import { thunkHandlers } from "./handler";

// Ademas del ui tambien tiene que agrupar los "paths"
const initialState = {
  google_loaded: false,
  google_credential: null,
  ui: {
    bodyViewActive: "logOrReg",
    formViewActive: "login",
  },
  loadingRequest: false, // Se repite en UI
  response: null,
};

const AccessSlice = createSlice({
  name: "accessSlice",
  initialState,
  reducers: {
    setGoogleLoaded: (state, action) => {
      state.google_loaded = action.payload;
    },
    setGoogleCredential: (state, action) => {
      state.google_credential = action.payload;
    },
    setChangeView: (state, action) => {
      if (state.ui.bodyViewActive !== "logOrReg") {
        state.ui.bodyViewActive = "logOrReg";
        state.google_credential = null;
      }

      state.response = null;
      state.ui.formViewActive = action.payload.formView;
    },
    setGoogleView: (state, action) => {
      state.ui.bodyViewActive = "googleRegister";
      state.ui.formViewActive = action.payload.formView;
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

const { setGoogleLoaded, setGoogleCredential, setChangeView, setGoogleView } =
  AccessSlice.actions;

export const AccessAction = {
  setGoogleLoaded,
  setGoogleCredential,
  setChangeView,
  setGoogleView,
};

export const AccessReducer = AccessSlice.reducer;
