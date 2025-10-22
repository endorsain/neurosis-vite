import { createSlice } from "@reduxjs/toolkit";
// import { AccessThunks } from "../";
// import { loginWithGoogle_handlers } from "./handlers";
// import { AccessThunks } from "../thunks";
import { thunkHandlers } from "./handlers";

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

// const thunkHandlers = {
//   [AccessThunks.loginWithGoogle.typePrefix]: loginWithGoogle_handlers,
// };

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
