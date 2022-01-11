import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
      createUserProfile: builder.query({
            query: (publicAddress) => ({url: `user/${publicAddress}`}),
            
      }),
      getUserProfile: builder.query({
            query: (publicAddress) => ({url: `user/${publicAddress}`}),
            providesTags: ['User'],
      }),
      addFriend: builder.mutation ({
            query: ({userID, friendID}) => ({
                  url: `user/add`, 
                  method: 'post',
                  mode: 'cors',
                  headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                  body: new URLSearchParams({
                        userID,
                        friendID
                  })
            }),
            invalidatesTags: ['User']
      })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserProfileQuery, useAddFriendMutation } = userAPI;