import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const getProductDetails = createAsyncThunk(
  "getProduct/getProductDetails",
  async (id) => {
    try {
      const res = await api.get(`products/${id}`);

      const data = res.data;

      return data;
    } catch (error) {}
  }
);

const getProductDetailsSlice = createSlice({
  name: "getProduct",
  initialState: {
    product: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default getProductDetailsSlice.reducer;
