import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../../shared/httlpClient";

interface IPayload {
  googleCredential: string;
  username?: string;
  password?: string;
}
// Opcion 2: hacer dos, uno para iniciar sesion y otro para registrarse(google).
export const accessWithGoogle = createAsyncThunk(
  "access_thunks",
  async (payload: IPayload, { rejectWithValue }) => {
    try {
      console.log("THUNK init");

      const response = await httpClient.post(
        "/auth/access-with-google",
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
