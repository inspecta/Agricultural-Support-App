import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

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
      query: (userId) => `/transactions/${userId}`,
    }),
    getUserLoans: builder.query({
      query: (userId) => `/loans/${userId}`,
    }),
    getTotalLoanBalance: builder.query({
      query: (userId) => `total-loans/${userId}`,
    }),
    addTransaction: builder.mutation({
      query: ({ transaction, userId }) => ({
        url: `/add-transaction?userId=${userId}`,
        method: "POST",
        body: transaction,
      }),
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: "/login-user",
        method: "POST",
        body: user,
      }),
    }),
  }),
})

export const {
  useGetBalanceQuery,
  useGetTotalEarnedQuery,
  useGetTotalCreditQuery,
  useLoginUserMutation,
  useGetEarningsQuery,
  useAddTransactionMutation,
  useGetUserLoansQuery,
  useGetTotalLoanBalanceQuery,
} = transactionSlice
