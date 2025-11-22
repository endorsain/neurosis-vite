import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../i18n";

const initialState = {
  // language: i18n.language || "en",
  language: localStorage.getItem("i18nextLng") || "en",
  theme: localStorage.getItem("theme") || "carton",
  test: {
    load_req: false,
  },
};
// Los temas van a ser:
// Carton: El normal, rojo, negro, tonos naranjas y carton.
// Martix: naranja y negro, hacker
// Rosa: rosa :p

const SettingSlice = createSlice({
  name: "settingSlice",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem("i18nextLng", action.payload);
    },
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
      document.documentElement.setAttribute("data-theme", action.payload);
    },
    setTest(state) {
      state.test.load_req = !state.test.load_req;
    },
  },
});

const { setLanguage, setTheme, setTest } = SettingSlice.actions;

export const SettingAction = {
  setLanguage,
  setTheme,
  setTest,
};

export const SettingReducer = SettingSlice.reducer;
