import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsReducer";
import cartsReducer from "./carts/cartsReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartsReducer,
  },
});

export default store;
