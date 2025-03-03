import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase-config';
import { apiClient } from '../../common/apiClient';

const signinThunk = createAsyncThunk(
  'auth/sign-in',
  async (userData, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        // return setMessage({ error: 'The email has not been verified.' });
        throw new Error('The email has not been verified.');
      }

      const idToken = await user.getIdToken();
      const refreshToken = user.refreshToken;

      const response = await apiClient.post({
        url: `${import.meta.env.VITE_SERVER_URL}/common-web-user/auth/sign-in`,
        body: null,
        headers: {
          idToken,
          refreshToken,
        },
        timestampType: false,
      });

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message || 'Error when logging in!',
      });
    }
  }
);

export default signinThunk;
