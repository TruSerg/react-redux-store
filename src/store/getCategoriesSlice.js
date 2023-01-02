import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const getProductsCategories = createAsyncThunk(
  "getCategories/getProductsCategories",
  async () => {
    try {
      const res = await api.get(`products/categories`);

      const data = res.data;

      return data;
    } catch (error) {}
  }
);

const getProductsCategoriesSlice = createSlice({
  name: "getCategories",
  initialState: {
    categoriesList: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categoriesList = payload;
    });
    builder.addCase(getProductsCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default getProductsCategoriesSlice.reducer;
