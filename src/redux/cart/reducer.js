import { CartActionTypes } from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map(
          (product) =>
            product.id === payload.id && {
              ...product,
              quantity: product.quantity + 1,
            }
        ),
      };
    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map(
            (product) =>
              product.id === payload.id && {
                ...product,
                quantity: product.quantity - 1,
              }
          )
          .filter((product) => product.quantity > 0),
      };
    default:
      return state;
  }
};
