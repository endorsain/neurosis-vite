import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../../shared/httlpClient";

export const getGeneralUserData = createAsyncThunk(
  "getGeneralUserData",
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      console.log("que onda aca");

      const response = await httpClient.get("/user/get-info");

      console.log("getGeneralDataThunk success: ", response);

      return response.data.user;
    } catch (error) {
      console.log("getGeneralDataThunk error: ", error);
      return rejectWithValue(error);
    }
  }
);
