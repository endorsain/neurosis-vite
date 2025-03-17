import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../common/apiClient';

const getAllThunk = createAsyncThunk(
  'auth/getAllThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get({
        url: `${import.meta.env.VITE_SERVER_URL}/common-web-user/auth-user/get-all`,
        params: true,
      });

      console.log('AUTH THUNK: ', response.success);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message || 'Error in authThunk',
      });
    }
  }
);

export default getAllThunk;
