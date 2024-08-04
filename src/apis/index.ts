import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioAPI = createApi({
  reducerPath: "Portfolio",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-xpx3.onrender.com/api/"
  }),
  endpoints: (builder) => ({
    getHomeDetails: builder.query({
      query: () => ({
        method: "GET",
        url: "home"
      })
    }),
    getPortfolios: builder.query({
      query: () => ({
        method: "GET",
        url: "projects"
      })
    })
  })
})

export const { useGetHomeDetailsQuery, useGetPortfoliosQuery } = portfolioAPI