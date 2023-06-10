import apiSlice from "../api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/login',
                method: 'POST',
                body: { ...credentials }
            }),

        }),
        getAllProducts: builder.query({
            query: () => "/api/v1/products",
            keepUnusedDataFor: 1
        }),
    })
})

export const { useLoginMutation, useGetAllProductsQuery } = authApiSlice;