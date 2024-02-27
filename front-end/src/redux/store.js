import { configureStore } from '@reduxjs/toolkit';
import windowReducer from './windowReducer';

export const store = configureStore({
  reducer: {
    window: windowReducer,
  },
});