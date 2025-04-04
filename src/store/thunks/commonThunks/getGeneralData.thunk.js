import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../common/apiClient';

const getGeneralDataThunk = createAsyncThunk(
  'getGeneralDataThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get({
        url: `${import.meta.env.VITE_SERVER_URL}/auth-user/get-all`,
        params: true,
      });

      console.log('getGeneralDataThunk success: ', response.success);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message || 'Error in getGeneralDataThunk',
        status: error.status,
      });
    }
  }
);

export default getGeneralDataThunk;
