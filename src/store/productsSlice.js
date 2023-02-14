import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "getProducts",
  initialState: {
    searchValue: "",
  },
  reducers: {
    handleSearchChange(state, { payload }) {
      state.searchValue = payload;
    },
  },
});

export const { handleSearchChange } = productsSlice.actions;
export default productsSlice.reducer;
