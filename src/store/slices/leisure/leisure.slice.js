import { createSlice } from '@reduxjs/toolkit';
import { addLeisureThunk, getLeisureThunk } from './leisure.thunk';
import { loadFromLocalStorage, saveToLocalStorage } from './utils';

const initialState = loadFromLocalStorage();

/* const initialState =
  typeof window !== "undefined"
    ? loadFromLocalStorage()
    : {
        list: [], // Valor inicial consistente
        loading: false,
        error: null,
      }; */

const leisureSlice = createSlice({
  name: 'leisure',
  initialState,
  reducers: {
    clearLeisure(state) {
      state.list = [];
      state.meta = null;
      state.loading = false;
      state.error = null;
      saveToLocalStorage(state);
    },
  },
  extraReducers: builder => {
    builder
      // Carga de lista
      .addCase(getLeisureThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLeisureThunk.fulfilled, (state, action) => {
        state.list = action.payload.list || [];
        state.loading = false;
        saveToLocalStorage('leisure', state);
      })
      .addCase(getLeisureThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'error leisure';
      })
      // Resultado de adicion de leisure
      .addCase(addLeisureThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addLeisureThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
        state.error = null;
        saveToLocalStorage('leisure', state);
      })
      .addCase(addLeisureThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearLeisure } = leisureSlice.actions;
export default leisureSlice.reducer;
