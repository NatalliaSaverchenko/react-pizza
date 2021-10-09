import {
  ADD_PIZZA_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM
} from "./actionsTypes"

export const addPizzaToCart = (obj) => ({
  type: ADD_PIZZA_TO_CART,
  payload: obj,
});

export const plusCartItem = (obj) => ({
  type: PLUS_CART_ITEM,
  payload: obj,
});

export const minusCartItem = (obj) => ({
  type: MINUS_CART_ITEM,
  payload: obj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeCartItem = (obj) => ({
  type: REMOVE_CART_ITEM,
  payload: obj,
});
