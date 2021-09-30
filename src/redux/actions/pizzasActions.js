import { SET_PIZZAS, SET_LOADED } from "./actionsTypes"
import axios from 'axios'

export const setLoaded = (payload) => {
  return {
  type: SET_LOADED,
  payload,
  }
}

export const fetchPizzas = (sortBy, categories) => (dispatch) => {
  dispatch(setLoaded(false))
   axios.get(`/pizzas?${categories !== null ? `category=${categories}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
  .then(({ data }) => {
    dispatch(setPizzas(data))
})

}

export const setPizzas = (items) => {
  return {
  type: SET_PIZZAS,
  payload: items
 }
}
