import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
  reducerPath: "fakeStore/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "products",
    }),
    getCategories: build.query({
      query: () => "products/categories",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = fakeStoreApi;
