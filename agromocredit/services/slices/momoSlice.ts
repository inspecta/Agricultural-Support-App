import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const params = {
  "amount": "4000",
  "currency": "EUR",
  "externalId": "string",
  "payeeNote": "MoMo",
  "payer":  {
    "partyId": "0772343434",
    "partyIdType": "MSISDN",
  },
  "payerMessage": "This ",
};

export const momoSlice = createApi({
    reducerPath: 'momoapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sandbox.momodeveloper.mtn.com' }),
    tagTypes: ['momo'],
    endpoints: (builder) => ({
      requestPayment: builder.mutation({
        query: (requestAttributes) => ({            
          url: '/collection/v1_0/requesttopay',
          method: 'POST',
          headers: {
            "Ocp-Apim-Subscription-Key": "2820b39d5bc2421da2b3f42b4cce8929",
            "X-Reference-Id": requestAttributes.referenceId,
            "X-Target-Environment": "sandbox",
            Authorization: `Bearer ${requestAttributes.token}`,
          },
          params,
        }),
      }),
    }),    
  });
  

export const {
    useRequestPaymentMutation,
} = momoSlice;