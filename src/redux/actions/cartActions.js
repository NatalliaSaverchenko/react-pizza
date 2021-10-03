import {
  ADD_PIZZA_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM
} from "./actionsTypes"

export const addPizzaToCart = (pizzaObj) => {
  return {
    type: ADD_PIZZA_TO_CART,
    payload: pizzaObj
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
}

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id
  }
}

export const plusCartItem = (id) => {
  return {
    type: PLUS_CART_ITEM,
    payload: id
  }
}
export const minusCartItem = (id) => {
  return {
    type: MINUS_CART_ITEM,
    payload: id
  }
}
