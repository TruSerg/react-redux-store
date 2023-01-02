import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const getAllProducts = createAsyncThunk(
  "getProducts/getAllProducts",
  async () => {
    try {
      const res = await api.get(`products`);

      const data = res.data;

      return data;
    } catch (error) {}
  }
);

const getProductsSlice = createSlice({
  name: "getProducts",
  initialState: {
    products: [],
    searchValue: "",
    isLoading: false,
  },
  reducers: {
    handleSearchChange(state, { payload }) {
      state.searchValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { handleSearchChange } = getProductsSlice.actions;
export default getProductsSlice.reducer;
