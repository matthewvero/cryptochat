import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import uiReducer from './slices/ui-slice'
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {auth: authReducer, ui: uiReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})