import {apiSlice} from '@redux/api/apiSlice';
import {endpoints} from '@src/shared/exporter';

export const appApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    dashboardData: builder.query({
      query: () => ({
        url: endpoints.dashboards,
        method: 'GET',
      }),
      transformResponse: (response: any) => response?.data,
    }),
  }),

  overrideExisting: true,
});

export const {useNotificationsDataQuery} = appApiSlice;
