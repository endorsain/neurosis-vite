import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../shared/httlpClient";

export const sendGoogleCredential = createAsyncThunk(
  "googleAuth/sendGoogleCredential",
  async (googleCredential: string, { rejectWithValue }) => {
    try {
      const response = await httpClient.post("/auth/access-with-google", {
        googleCredential,
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
