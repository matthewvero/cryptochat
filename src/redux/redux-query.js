import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
      createUserProfile: builder.query({
            query: (publicAddress) => ({url: `user/${publicAddress}`})
      }),
      getUserProfile: builder.query({
            query: (publicAddress) => ({url: `user/${publicAddress}`}),
      }),

  }),
})

console.log(userAPI)

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserProfileQuery } = userAPI;