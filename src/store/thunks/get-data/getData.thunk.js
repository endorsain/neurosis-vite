import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../common/apiClient';

const getDataThunk = createAsyncThunk(
  'getDataThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get({
        url: `${import.meta.env.VITE_SERVER_URL}/auth-user/get-all`,
        params: true,
      });

      console.log('getDataThunk success: ', response.success);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message || 'Error in getDataThunk',
      });
    }
  }
);

export default getDataThunk;
