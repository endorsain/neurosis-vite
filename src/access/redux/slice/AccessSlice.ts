import { createSlice } from "@reduxjs/toolkit";
import { AccessThunks } from "../";
import {
  handle_pending,
  handle_rejected,
  accessWithGoogle_fulfilled,
} from "./utils";

const initialState = {
  google_loaded: false,
  google_credential: null,
  // LOADING_REQUEST es buena para todas las request del slice
  loading_request: false,
  error: null,
};

// Aqui se puede conglomerar
// accessWithgoogle.fulfilled, accessWithgoogle.rejected, etc...

const fulfilledHandlers = {
  [AccessThunks.accessWithGoogleThunk.typePrefix]: accessWithGoogle_fulfilled,
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
const AccessReducer = AccessSlice.reducer;

export default AccessReducer;
//TODO: IMPORTANTE REFACTORIZAR ACCESSLAYOUT PARA ESTADO CON REDUX.
// 1) Entender lo de google. ✅
// 2) Añadir el thunk para traer los tokens. ✅
// a. Separar el thunk del hook de google?
// b. Poner las credenciales y los datos de usuario en el estado?
// 3) Thunk para inicio de sesion y registro.
// 4) Errores de formulario para acceso con google(username), login y register.
// 5) Errores de peticion para acceso con google, login y register.
// 6) Estado para UI (investigar).
// 7) Estado para "loadings".
// 8) Hacer el estado para los idiomas, idioma inicial ES, idioma secundario EN.

// Idea PageControl, componente en las paginas que interviene los
// estilos o dinamicas de componente. Se combina con el Estdao de UI?
