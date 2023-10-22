import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionSlice } from './slices/transactionSlice';

const { middleware: apiMiddleware } = transactionSlice;

export const store = configureStore({
  reducer: {
    [transactionSlice.reducerPath]: transactionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
