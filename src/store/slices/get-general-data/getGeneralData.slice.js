import { createSlice } from '@reduxjs/toolkit';
import { getGeneralDataThunk } from '../../thunks';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getGeneralDataSlice = createSlice({
  name: 'getGeneralData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getGeneralDataThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGeneralDataThunk.fulfilled, state => {
        state.loading = false;
        state.data = 'queseyo flaco';
        state.error = null;
      })
      .addCase(getGeneralDataThunk.rejected, state => {
        state.loading = false;
        state.data = null;
        state.error = 'mensaje de error flaco';
      });
  },
});

// export const { clearMessage } = getGeneralDataSlice.actions;
export default getGeneralDataSlice.reducer;
