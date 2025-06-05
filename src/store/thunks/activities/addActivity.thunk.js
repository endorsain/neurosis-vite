import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../common/apiClient';

const addActivityThunk = createAsyncThunk(
  'addActivityThunk',
  async (activity, { rejectWithValue }) => {
    try {
      const response = await apiClient.post({
        url: `${import.meta.env.VITE_SERVER_URL}/auth-user/add-activity`,
        params: true,
        body: {
          activity,
        },
      });

      console.log('addActivityThunk success: ', response.success);

      return response;
    } catch (error) {
      return rejectWithValue({
        // message: error.message || 'Error in getGeneralDataThunk',
        // status: error.status,
      });
    }
  }
);

export default addActivityThunk;
