import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionSlice } from './slices/transactionSlice';
import { momoSlice } from './slices/momoSlice';
import { marketPlaceSlice } from './slices/marketPlaceSlice';

export const store = configureStore({
  reducer: {
    [transactionSlice.reducerPath]: transactionSlice.reducer,
    [momoSlice.reducerPath]: momoSlice.reducer,
    [marketPlaceSlice.reducerPath]: marketPlaceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      transactionSlice.middleware,
      momoSlice.middleware,
      marketPlaceSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
