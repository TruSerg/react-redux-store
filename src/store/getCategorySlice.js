import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const getProductsCategory = createAsyncThunk(
  "getCategory/getProductsCategory",
  async (category) => {
    try {
      const res = await api.get(`products/category/${category}`);

      const data = res.data;

      return data;
    } catch (error) {}
  }
);

const getProductsCategorySlice = createSlice({
  name: "getCategory",
  initialState: {
    categoryProductsList: [],
    categoryItem: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsCategory.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categoryProductsList = payload;
      [state.categoryItem] = payload;
    });
    builder.addCase(getProductsCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default getProductsCategorySlice.reducer;
