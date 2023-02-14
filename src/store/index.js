import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./productsSlice";
import getProductDetailsReducer from "./getProductDetailsSlice";
import cartReducer from "./cartSlice";
import getCategoryProductsReducer from "./getCategoryProductsSlice";
import { fakeStoreApi } from "./fakeStoreAPI";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(fakeStoreApi.middleware),
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    products: productsReducer,
    getProduct: getProductDetailsReducer,
    getCategoryProducts: getCategoryProductsReducer,
    cart: cartReducer,
  },
});
