import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;

      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === payload.id
      );

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }

      state.products = [...state.products, { ...payload, quantity: 1 }];
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      console.log("🚀 ~ file: slice.js:31 ~ payload", payload);
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
    increaseProductQuantity: (state, action) => {
      const { payload } = action;
      state.products = state.products.map((product) =>
        product.id === payload
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      );
    },
    decreaseProductQuantity: (state, action) => {
      const { payload } = action;
      state.products = state.products
        .map((product) =>
          product.id === payload
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
