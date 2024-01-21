import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorite = state.favorite.filter(item => item.id !== payload.id);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
