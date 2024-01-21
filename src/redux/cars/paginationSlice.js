import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  limit: 12,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
