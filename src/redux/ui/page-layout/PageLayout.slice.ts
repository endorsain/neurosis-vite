import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: null,
  view: null,
  modal: null,
};

const PageLayoutSlice = createSlice({
  name: "pagelayout_slice",
  initialState,
  reducers: {
    setView: (state, action) => {
      console.log("redux", action.payload);

      state.view = action.payload;
    },
  },
});

const { setView } = PageLayoutSlice.actions;

export const PageLayoutAction = {
  setView,
};

export const PageLayoutReducer = PageLayoutSlice.reducer;
