import { configureStore } from '@reduxjs/toolkit';
import authErrorMiddleware from './middlewares/authErrorMiddleware';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authErrorMiddleware),
});
