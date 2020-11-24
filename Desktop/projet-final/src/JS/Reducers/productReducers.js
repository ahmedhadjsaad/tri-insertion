import {
    FETCH_FAIL,
    FETCH_PRODUCTS,
    FETCH_SUCCESS,
  } from "../constants/actions-types";
  
  const initialState = {
    loading: false,
    errors: null,
    products: [],
  };
  
  const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          loading: true,
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          products: payload,
        };
      case FETCH_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
    //   case ADD_TO_CART:
    //     return {
    //       ...state,
    //       cartItems : state.products.map((product) =>
    //       product.id === payload.id ? { ...product} : product
    //       ),
    //     };
  
      default:
        return state;
    }
  };
  export default productReducer;
  