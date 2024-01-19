import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carsReducer } from './cars/carsSlise';
import { filterReducer } from './filter/filterSlise';
import { favoriteReducer } from './favorite/favoriteSlice';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterReducer,
    favorite: persistReducer(persistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
