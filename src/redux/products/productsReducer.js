import { SET_PRODUCTS, SET_LOADING, SET_ERRORS } from "./productsActionType";

const initialState = {
  products: [],
  loading: false,
  errors: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ERRORS:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
