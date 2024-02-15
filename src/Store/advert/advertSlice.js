import { createSlice } from "@reduxjs/toolkit";
import { getAllAdvertThunk } from "./advertThunk";

const INITIAL_STATE = {
  carsAdvert: [],
  error: null,
  isLoading: true,
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertSlice = createSlice({
  name: "advert",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdvertThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advert = action.payload.advert;
        state.error = null;
      })

      .addCase(getAllAdvertThunk.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllAdvertThunk.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      });
  },
});

export const advertReducer = advertSlice.reducer;
