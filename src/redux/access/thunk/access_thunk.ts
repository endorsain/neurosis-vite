import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../../shared/httlpClient"; //esto es un helper

const jajaj = {
  root_thunk: "access_thunk",
  root_path: "auth",
};

function insertName(prefix: string) {
  return `${jajaj.root_thunk}/${prefix}`;
}

interface IPayload {
  googleCredential: string;
  username?: string;
  password?: string;
}

export const loginWithGoogle = createAsyncThunk(
  insertName("loginWithGoogle"),
  async (payload: any, { rejectWithValue }) => {
    try {
      console.log("THUNK init");

      // console.log(payload);
      const response = await httpClient.post(
        "/auth/login-with-google",
        payload
      );

      console.log("THUNK success: ", response.data);

      return response.data;
    } catch (err: any) {
      console.log("THUNK error: ", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const registerWithGoogle = createAsyncThunk(
  insertName("registerWithGoogle"),
  async (payload: IPayload, { rejectWithValue }) => {
    try {
      console.log("THUNK init");

      console.log(payload);

      const response = await httpClient.post(
        "/auth/register-with-google",
        payload
      );

      console.log("THUNK success: ", response.data);

      return response.data;
    } catch (err: any) {
      console.log("THUNK error: ", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  insertName("loginUser"),
  async (payload: any, { rejectWithValue }) => {
    try {
      console.log("THUNK init");

      const response = await httpClient.post("/auth/login", payload);

      console.log("THUNK success: ", response.data);

      return response.data;
    } catch (err: any) {
      console.log("THUNK error: ", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  insertName("registerUser"),
  async (payload: any, { rejectWithValue }) => {
    try {
      console.log("THUNK init");

      const response = await httpClient.post("/auth/register", payload);

      console.log("THUNK success: ", response.data);

      return response.data;
    } catch (err: any) {
      console.log("THUNK error: ", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
