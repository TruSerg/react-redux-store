import { configureStore } from "@reduxjs/toolkit";

import getProductsReducer from "./getProductsSlice";
import getCategoriesReducer from "./getCategoriesSlice";
import getCategoryReducer from "./getCategorySlice";
import postUserLoginReducer from "./postUserLoginSlice";
import postRegistrationUserReducer from "./postRegistrationUserSlice";
import getUserReducer from "./getUserSlice";
import getProductDetailsReducer from "./getProductDetailsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    getProducts: getProductsReducer,
    getCategories: getCategoriesReducer,
    getCategory: getCategoryReducer,
    postLogin: postUserLoginReducer,
    postRegistration: postRegistrationUserReducer,
    getUser: getUserReducer,
    getProduct: getProductDetailsReducer,
    cart: cartReducer,
  },
});
