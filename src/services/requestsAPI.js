import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: "requestsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/user/"}),
    endpoints: (builder) => ({
        getUserProfile: builder.query({query: (token) => ({
            url: "profile",
            headers: {"Authorization": `Bearer ${token}`}
        })
    }),
        postLogin: builder.mutation({query: (loginInput) => ({
            url: "login",
            method: "POST",
            body: loginInput
        })
    })
    }) 
})

export const { useGetUserProfileQuery, usePostLoginMutation } = api