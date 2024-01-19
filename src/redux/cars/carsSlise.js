import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from 'redux/Api/api';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
