import { createSlice } from "@reduxjs/toolkit";
import { getAllAdvertThunk } from "./advertThunk";

const INITIAL_STATE = {
  carsAdvert: [],
  pages: 1,
  error: null,
  isLoading: true,
};

const handleLoadMore = (state) => {
  state.pages += 1;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertSlice = createSlice({
  name: "advert",
  initialState: INITIAL_STATE,
  reducers: {
    loadMore: handleLoadMore,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdvertThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsAdvert = [...state.carsAdvert, ...action.payload];
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

export const { loadMore } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
