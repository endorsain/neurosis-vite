import { createSlice } from "@reduxjs/toolkit";
import { thunkHandlers } from "./handler";

// Ademas del ui tambien tiene que agrupar los "paths"
const initialState = {
  google_loaded: false,
  google_credential: null,
  ui: {
    // view: "register",
    // headerButtonActive: "login",
    bodyViewActive: "logOrReg",
    formViewActive: "login",
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
      if (action.payload.formView === "google") {
        state.ui.bodyViewActive = "googleRegister";
      } else {
        if (state.ui.bodyViewActive !== "logOrReg") {
          state.ui.bodyViewActive = "logOrReg";
          state.google_credential = null;
        }
      }

      state.response = null;
      state.ui.formViewActive = action.payload.formView;
    },
    setChangeForm: (state, action) => {
      state.ui.formViewActive = action.payload.form;
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

const { setGoogleLoaded, setGoogleCredential, setChangeView, setChangeForm } =
  AccessSlice.actions;

export const AccessAction = {
  setGoogleLoaded,
  setGoogleCredential,
  setChangeView,
  setChangeForm,
};

export const AccessReducer = AccessSlice.reducer;
