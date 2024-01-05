import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsReducer";



export const store = configureStore({
  reducer: {
    products: productReducer
  }
})