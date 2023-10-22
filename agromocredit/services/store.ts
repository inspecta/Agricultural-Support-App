import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionSlice } from './slices/transactionSlice';
import { momoSlice } from './slices/momoSlice'; // Import your momoSlice

export const store = configureStore({
  reducer: {
    [transactionSlice.reducerPath]: transactionSlice.reducer,
    [momoSlice.reducerPath]: momoSlice.reducer, // Include your momoSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      transactionSlice.middleware, // Include the middleware for transactionSlice
      momoSlice.middleware, // Include the middleware for momoSlice
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
