import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import productReducer from './productReducers';

export default combineReducers({
  products : productReducer,
  cartItems : cartReducer
});
