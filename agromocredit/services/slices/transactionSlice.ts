import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://agromocredit.onrender.com' }),
  tagTypes: ['transaction'],
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: (userId) => `/${userId}/get-balance`,
    }),
    getTotalEarned: builder.query({
        query: (userId) => `/${userId}/total-earned`,
    }),
    getTotalCredit: builder.query({
        query: (userId) => `/${userId}/total-credit`,
    }),
    getEarnings: builder.query({
        query: (userId) => `/request-payment/${userId}`,
    }),
    getWithdraws: builder.query({
      query: (userId) => `/withdraw/${userId}`,
    }),
    getCreditScore: builder.query({
      query: (userId) => `/calculate-credit-score/${userId}`,
    }),
    addTransaction: builder.mutation({
      query: ({ transaction, userId }) => ({
        url: `/add-transaction?userId=${userId}`, // Use ? for query parameters
        method: 'POST',
        body: transaction,
      }),
    }),
    
    loginUser: builder.mutation({
      query: (user) => ({
        url: '/login-user',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const {
    useGetBalanceQuery,
    useGetTotalEarnedQuery,
    useGetTotalCreditQuery,
    useLoginUserMutation,
    useGetEarningsQuery,
    useAddTransactionMutation,
    useGetCreditScoreQuery,
    useGetWithdrawsQuery,
} = transactionSlice;