import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestHelper } from '../../utils/request';

export const authThunk = createAsyncThunk(
  'auth/authThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await requestHelper(
        `${import.meta.env.VITE_SERVER_URL}/common-web-user/get-all`,
        'GET',
        {},
        {}
      );
      console.log('VAMOS A VER', response.path);

      if (response.path === '/get-all/success/') {
        return {
          isAuthenticated: true,
        };
      } else {
        return rejectWithValue('/auth/authThunk/Error');
        //throw new Error("Autentication failed");
      }
    } catch (error) {
      //return rejectWithValue('/auth/authThunk/Error');
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  success_message: null,
  error: {
    code: null,
    message: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.loading = false;
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

//export const {} = authSlice.actions;
export default authSlice.reducer;
