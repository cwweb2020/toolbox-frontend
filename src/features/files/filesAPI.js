import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../axios";

export const getFiles = createAsyncThunk(
  "@api/files/data",
  async (data, thunkApi) => {
    try {
      const res = await axiosClient.get("/files/data");
      return res.data;
    } catch (error) {
      const msg = error.message;
      return thunkApi.rejectWithValue(msg);
    }
  }
);

export const getFile = createAsyncThunk(
  "@api/files/data/fileName",
  async (data, thunkApi) => {
    try {
      const res = await axiosClient.get(`/files/data?fileName=${data}`);
      return res.data;
    } catch (error) {
      const msg = error.message;
      return thunkApi.rejectWithValue(msg);
    }
  }
);
