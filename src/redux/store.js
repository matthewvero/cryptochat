import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import uiReducer from './slices/ui-slice'
import logger from 'redux-logger';
import { userAPI } from './redux-query';

export const store = configureStore({
  reducer: {auth: authReducer, ui: uiReducer, [userAPI.reducerPath]: userAPI.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userAPI.middleware, logger]),
})