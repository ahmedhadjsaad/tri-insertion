import { ADD_TO_CART, FETCH_FAIL, FETCH_PRODUCTS, FETCH_SUCCESS } from "../constants/actions-types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
    const res = await axios.get("/product");
    dispatch({
        type: FETCH_PRODUCTS,
      });
  try {
      dispatch({
          type : FETCH_SUCCESS,
          payload: res.data,
      })
  } catch (error) {
      dispatch({
          type : FETCH_FAIL,
          payload:error.response.data
      })
  }
};
export const addToCart = (product) => (dispatch ,getState ) => {
    // const cartItems = getState().cartItems.cartItems.slice()
    // console.log(cartItems)
    // let alreadyInCart = false
    // cartItems.find((item)=>{
    //     if(item._id===product._id){
    //         alreadyInCart = true
    //     }
    //     if (!alreadyInCart) {
    //         cartItems.push({...product})
    //     }
    // })
    dispatch({
        type : ADD_TO_CART,
        payload : product
        
    })

}
