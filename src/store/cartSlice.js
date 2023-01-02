import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartList: [],
    isAddItemToCart: null,
    isLoading: false,
  },

  reducers: {
    addProductToCart(state, { payload }) {
      state.cartList.push(payload);
    },
    deleteProductFromCart(state, { payload }) {
      const removeItem = state.cartList.findIndex(
        (item) => item.id === payload
      );
      state.cartList.splice(removeItem, 1);
    },
    itemCart(state, { payload }) {
      state.isAddItemToCart =
        state.cartList.findIndex((item) => item.id === payload) !== -1;
    },
  },
});

export const { addProductToCart, deleteProductFromCart, itemCart } =
  cartSlice.actions;
export default cartSlice.reducer;
