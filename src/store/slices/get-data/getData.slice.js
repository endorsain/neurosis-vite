import { createSlice } from '@reduxjs/toolkit';
import { getDataThunk } from '../../thunks';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getDataSlice = createSlice({
  name: 'getData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDataThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataThunk.fulfilled, state => {
        state.loading = false;
        state.data = 'queseyo flaco';
        state.error = null;
      })
      .addCase(getDataThunk.rejected, state => {
        state.loading = false;
        state.data = null;
        state.error = 'mensaje de error flaco';
      });
  },
});

// export const { clearMessage } = getDataSlice.actions;
export default getDataSlice.reducer;
