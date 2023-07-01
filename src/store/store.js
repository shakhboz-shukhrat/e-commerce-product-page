import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products/product";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
