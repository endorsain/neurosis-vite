import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendEmailVerification, signInWithCustomToken } from 'firebase/auth';
import { auth } from '../../../services/firebase-config';
import { apiClient } from '../../common/apiClient';

const signUpThunk = createAsyncThunk(
  'signUpThunk',
  async (userData, { rejectWithValue }) => {
    try {
      //eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...restValue } = userData;

      const response = await apiClient.post({
        url: `${import.meta.env.VITE_SERVER_URL}/user-access/sign-up`,
        body: restValue,
        headers: {},
      });

      const userCredential = await signInWithCustomToken(
        auth,
        response.data.idToken
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      // return 'We need you to verify your email and log in!';
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message || 'An unexpected error occurred.',
        code: error.code || 'unknown_error',
        type: error.type || 'server_error',
      });
    }
  }
);

export default signUpThunk;
