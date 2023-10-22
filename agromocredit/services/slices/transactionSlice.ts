import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.9.43:8080' }),
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
        query: (userId) => `/transactions/${userId}`,
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
} = transactionSlice;