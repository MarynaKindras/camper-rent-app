import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './advertsSlice';
import filtersReducer from './filtersSlice';
import { persistedReducer } from './favoritesSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistedReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)