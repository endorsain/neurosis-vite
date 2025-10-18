import { createSlice } from "@reduxjs/toolkit";
// import { AccessThunks } from "../";
import {
  handle_pending,
  handle_rejected,
  accessWithGoogle_fulfilled,
} from "./utils";
import { AccessThunks } from "../thunks";

const initialState = {
  google_loaded: false,
  google_credential: null,
  // LOADING_REQUEST es buena para todas las request del slice
  loading_request: false,
  error: null,
  //UI
};

// Aqui se puede conglomerar
// accessWithgoogle.fulfilled, accessWithgoogle.rejected, etc...

const fulfilledHandlers = {
  [AccessThunks.accessWithGoogle.typePrefix]: accessWithGoogle_fulfilled,
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
    Object.entries(fulfilledHandlers).forEach(
      ([thunkPrefix, fulfilledHandler]) => {
        builder
          .addCase(`${thunkPrefix}/pending`, handle_pending)
          .addCase(`${thunkPrefix}/fulfilled`, fulfilledHandler)
          .addCase(`${thunkPrefix}/rejected`, handle_rejected);
      }
    );
  },
});

export const { setGoogleLoaded, setGoogleCredential, clearGoogleCredential } =
  AccessSlice.actions;

export const AccessReducer = AccessSlice.reducer;
