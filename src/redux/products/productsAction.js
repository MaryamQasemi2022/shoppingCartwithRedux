import { SET_PRODUCTS, SET_LOADING, SET_ERRORS } from "./productsActionType";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};
const setErrors = (error) => {
  return {
    type: SET_ERRORS,
    payload: error,
  };
};

const fetchProducts = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      const res = await fetch(
        "https://7d8518f4-c4f5-4de7-aec9-b89fa6b2e59a.mock.pstmn.io/products"
      );
      const data = await res.json();
      if (res.ok) {
        dispatch(setProducts(data));
        dispatch(setErrors(null));
      } else {
        dispatch(setProducts(null));
        dispatch(setErrors("try again"));
      }
    } catch (error) {
      dispatch(setProducts(null));
      dispatch(setErrors(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export { setProducts, setErrors, setLoading, fetchProducts };
