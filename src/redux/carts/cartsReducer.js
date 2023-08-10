import {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_FROM_CART,
  DELETE_CART,
} from "./cartsActionType";

const updateLocalStorage = (carts) => {
  localStorage.setItem("shoppingCarts", JSON.stringify(carts));
};
const initialState = {
  carts: localStorage.getItem("shoppingCarts")
    ? JSON.parse(localStorage.getItem("shoppingCarts"))
    : [],
};

const cartsReducer = (state = initialState, action) => {
  let newCarts = [];

  switch (action.type) {
    case ADD_TO_CART:
      newCarts = [...state.carts, { ...action.payload, qyt: 1 }];
      updateLocalStorage(newCarts);
      return {
        ...state,
        carts: newCarts,
      };

    case REMOVE_FROM_CART:
      newCarts = state.carts.filter((cart) => cart.id !== action.payload.id);
      updateLocalStorage(newCarts);
      return {
        ...state,
        carts: newCarts,
      };

      return { ...state, errors: action.payload };

    case INCREMENT:
      newCarts = state.carts.map((p) =>
        p.id === action.payload.id ? { ...p, qyt: p.qyt + 1 } : p
      );
      updateLocalStorage(newCarts);
      return {
        ...state,
        carts: newCarts,
      };

    case DECREMENT:
      const quantity = state.carts.find((p) => p.id === action.payload.id).qyt;
      quantity > 1
        ? (newCarts = state.carts.map((p) =>
            p.id === action.payload.id ? { ...p, qyt: p.qyt - 1 } : p
          ))
        : (newCarts = state.carts);

      updateLocalStorage(newCarts);
      return {
        ...state,
        carts: newCarts,
      };
    case DELETE_CART:
      updateLocalStorage([]);
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};

export default cartsReducer;
