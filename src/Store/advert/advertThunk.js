import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "services/api";

export const getAllAdvertThunk = createAsyncThunk("advert/getAll", async (_, thunkAPI) => {
  try {
    const data = await API.getAllAdvert();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
