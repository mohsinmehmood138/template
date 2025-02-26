import {apiSlice} from '@redux/api/apiSlice';
import {FORM_DATA_HEADER, POST} from '@src/shared/exporter';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginAndPreSignUp: builder.mutation({
      query: (data: any) => {
        return {
          url: 'auth/sessions',
          method: POST,
          body: data,
          headers: {
            'Content-Type': FORM_DATA_HEADER,
          },
        };
      },
    }),
  }),

  overrideExisting: true,
});

export const {useLoginAndPreSignUpMutation} = authApiSlice;
