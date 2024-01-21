import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectFilter = state => state.filters.value;

export const selectFavorites = state => state.favorite;

export const selectPagination = state => state.pagination;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (items, values) => {
    return items?.filter(car => {
      return car.make.includes(values) ?? [];
    });
  }
);
