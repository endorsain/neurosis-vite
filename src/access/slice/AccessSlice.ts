import { createSlice } from "@reduxjs/toolkit";
import { AccessThunks } from "../AccessThunks";
import {
  handle_pending,
  handle_rejected,
  sendGoogleCredential_fullfilled,
} from "./utils";

const initialState = {
  isGoogleLoaded: false,
  loading: false,
  error: null,
};

const fulfilledHandlers = {
  [AccessThunks.sendGoogleCredentialThunk.typePrefix]:
    sendGoogleCredential_fullfilled,
};

const AccessSlice = createSlice({
  name: "AccessSlice",
  initialState,
  reducers: {
    setGoogleLoaded: (state, action) => {
      state.isGoogleLoaded = action.payload;
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

export const { setGoogleLoaded } = AccessSlice.actions;
const AccessReducer = AccessSlice.reducer;

export default AccessReducer;
//TODO: IMPORTANTE REFACTORIZAR ACCESSLAYOUT PARA ESTADO CON REDUX.
// 1) Entender lo de google.
// 2) Añadir el thunk para traer los tokens.
// 3) Thunk para inicio de sesion y registro.
// 4) Errores de formulario para acceso con google(username), login y register.
// 5) Errores de peticion para acceso con google, login y register.
