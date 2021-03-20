import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Countries } from './Countries';

const store = configureStore({
  reducer: {
    countries: Countries.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
