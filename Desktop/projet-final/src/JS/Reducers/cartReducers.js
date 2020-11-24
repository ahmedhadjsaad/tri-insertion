import { ADD_TO_CART } from "../constants/actions-types";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
       let doesItemExist = false;
      const newState = state.cartItems.map((item) => {
        if (item._id === payload._id) {
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return [newState];
      }
      return  {
          cartItems : [...state.cartItems,{...payload}]
      }

    default:
      return state;
  }
};
export default cartReducer;
