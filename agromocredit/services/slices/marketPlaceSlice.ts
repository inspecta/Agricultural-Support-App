import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const marketPlaceSlice = createApi({
  reducerPath: 'marketapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://agromocredit.onrender.com' }),
  tagTypes: ['transaction'],
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (productCategory) => `/category/${productCategory}`,
    }),
    getProductById: builder.query({
        query: (product) => `/product/${product}`,
    }),
    getProducts: builder.query({
        query: () => `/products`,
    }),    
    addProduct: builder.mutation({
      query: (product) => ({
        url: '/add-product',
        method: 'POST',
        body: product,
      }),
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useAddProductMutation,
} = marketPlaceSlice;