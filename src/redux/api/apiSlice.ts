import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '@env';

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  // Check if body is FormData
  const isFormData = args.body instanceof FormData;

  const result = await fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      const state: any = getState();
      const {accessToken, authAccessToken} = state?.auth;

      headers.set('Accept', '*/*');
      if (accessToken || authAccessToken) {
        headers.set(
          'Authorization',
          `Bearer ${accessToken || authAccessToken}`,
        );
      }

      // Don't set Content-Type for FormData (it will be set automatically)
      if (!isFormData && !headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
      }

      return headers;
    },
  })(args, api, extraOptions);

  return result;
};

// Create API slice using the enhanced base query
export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: builder => ({}),
});
