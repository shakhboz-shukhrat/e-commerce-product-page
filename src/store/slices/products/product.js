import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../../assets/images/image-product-1.jpg";
import product2 from "../../../assets/images/image-product-2.jpg";
import product3 from "../../../assets/images/image-product-3.jpg";
import product4 from "../../../assets/images/image-product-4.jpg";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    images: [product1, product2, product3, product4],
    show: false,
    count: 0,
    cost: 125,
  },
  reducers: {
    setImageZoomed: (state, action) => {
      state.show = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    deleteProduct: (state) => {
      state.count = 0;
    },
  },
});

export const { setImageZoomed, increment, decrement, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
