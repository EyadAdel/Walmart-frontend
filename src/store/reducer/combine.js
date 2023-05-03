import { combineReducers } from 'redux';
import addCustomer from './customerReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  // favorites: favoritesReducer,
  getProducts: productsReducer,
  addCustomer: addCustomer,
  cartReducer: cartReducer
});