import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestHelper } from '../../../utils/request';

export const addLeisureThunk = createAsyncThunk(
  'leisure/addLeisure',
  async ({ title }, { rejectWithValue }) => {
    try {
      const response = await requestHelper(
        `${import.meta.env.VITE_SERVER_URL}/common-web-user/add-leisure`,
        'POST',
        {
          title,
        },
        {}
      );
      console.log('Desde thunk: ', response.data.leisure.leisure.list);
      return response.data.leisure.leisure.list;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getLeisureThunk = createAsyncThunk(
  'leisure/getLeisure',
  async (_, { rejectWithValue }) => {
    try {
      const response = await requestHelper(
        `${import.meta.env.VITE_SERVER_URL}/common-web-user/get-leisure`,
        'GET',
        {},
        {}
      );
      /* if(response !== '/get-leisure/success/') {
        
      } */

      console.log('fetch: ', response.data.leisure);

      return response.data.leisure;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
