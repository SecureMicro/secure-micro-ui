import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '../axiosBaseQuery'

const baseQuery = axiosBaseQuery({ environment: 'dev' })

export const commonAPiCall = createApi({
    reducerPath: 'commonApiCall',
    baseQuery,
    endpoints: (builder) => ({
        fetchCommonApiData: builder.query<string>({
            query: ({ url }) => ({``
                url: url,
                method: 'GET',
            }),
        }),
        postFormRequest: builder.mutation<any>({
            query: ({ url, values }) => ({
                url,
                method: 'POST',
                data: { ...values },
            }),
        }),
    }),
})
