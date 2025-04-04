import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../common/apiClient';

const logOutThunk = createAsyncThunk(
  'logOutThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete({
        url: `${import.meta.env.VITE_SERVER_URL}/auth-user/sign-out`,
        params: true,
      });
      console.log('logOutThunk', response);

      return response;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

export default logOutThunk;
