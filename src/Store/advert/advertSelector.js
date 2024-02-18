import { createSelector } from "@reduxjs/toolkit";

export const selectCarsAdvert = (state) => state.advert.carsAdvert;
export const selectFilteredCarsAdvert = (state) => state.advert.filteredCarList;
export const selectError = (state) => state.advert.error;
export const selectIsLoading = (state) => state.advert.isLoading;
export const selectPage = (state) => state.advert.pages;
export const selectCurrentCar = (state) => state.advert.currentCar;
export const selectFavorites = (state) => state.advert.favorites;
export const selectfilteredMake = (state) => state.advert.filteredMake;
export const selectfilteredPrice = (state) => state.advert.filteredPrice;

export const selectCarMake = createSelector([selectCarsAdvert], (allCars) => {
  const makers = allCars.map((car) => car.make);
  return [...new Set(makers)];
});

export const selectCarPrices = createSelector([selectCarsAdvert], (allCars) => {
  const prices = allCars.map((car) => Number(car.rentalPrice.slice(1)));
  return [...new Set(prices)].sort(function (a, b) {
    return a - b;
  });
});
