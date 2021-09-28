import { SET_PIZZAS } from "./actionsTypes"

export const setPizzas = (items) => {
  return {
  type: SET_PIZZAS,
  payload: items
 }
}
