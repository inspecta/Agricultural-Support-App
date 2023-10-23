import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionSlice } from './slices/transactionSlice';
import { momoSlice } from './slices/momoSlice';

export const store = configureStore({
  reducer: {
    [transactionSlice.reducerPath]: transactionSlice.reducer,
    [momoSlice.reducerPath]: momoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      transactionSlice.middleware,
      momoSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
