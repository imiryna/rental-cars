import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllAdvertThunk, getCarBiIdThunk } from "./advertThunk";

const INITIAL_STATE = {
  carsAdvert: [],
  pages: 1,
  error: null,
  isLoading: true,
  currentCar: null,
  filteredMake: "",
  filteredPrice: "",
  filteredCarList: [],
  favorites: [],
};

const handleLoadMore = (state) => {
  state.pages += 1;
  state.isLoading = true;
};

const advertSlice = createSlice({
  name: "advert",
  initialState: INITIAL_STATE,
  reducers: {
    loadMore: handleLoadMore,
    setCurrentCar: (state, payload) => {
      state.currentCar = payload.payload;
    },
    setFilterMake: (state, action) => {
      state.filteredMake = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.filteredPrice = action.payload;
    },
    toggleToFavorites: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((item) => item !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
    commonFilter: (state, action) => {
      const filters = action.payload;
      state.filteredCarList = state.carsAdvert.filter((item) => {
        const rentalPrice = Number(item.rentalPrice.slice(1));
        const makeFilter = filters.make ? item.make === filters.make : true;
        const priceFilter = filters.price ? rentalPrice <= filters.price : true;
        return makeFilter && priceFilter;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllAdvertThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsAdvert = [...state.carsAdvert, ...action.payload];
        state.error = null;
      })

      .addCase(getCarBiIdThunk.fulfilled, (state, action) => {
        state.currentCar = action.payload;
        state.error = null;
      })

      .addMatcher(isAnyOf(getAllAdvertThunk.pending, getCarBiIdThunk.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(isAnyOf(getAllAdvertThunk.rejected, getCarBiIdThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loadMore, setCurrentCar, setFilterMake, setFilterPrice, toggleToFavorites, commonFilter } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
