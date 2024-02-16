import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "services/api";

export const getAllAdvertThunk = createAsyncThunk("advert/getAll", async (page, thunkAPI) => {
  try {
    const data = await API.getAllAdvert(page);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCarBiIdThunk = createAsyncThunk("advert/getCarBiId", async (carId, thunkAPI) => {
  try {
    const data = await API.getCarById(carId);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
