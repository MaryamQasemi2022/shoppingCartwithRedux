import {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_FROM_CART,
  DELETE_CART,
} from "./cartsActionType";

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
const deleteCart = () => {
  return {
    type: DELETE_CART,
  };
};
const increment = (product) => {
  return {
    type: INCREMENT,
    payload: product,
  };
};
const decrement = (product) => {
  return {
    type: DECREMENT,
    payload: product,
  };
};

export { addToCart, increment, decrement, removeFromCart, deleteCart };
