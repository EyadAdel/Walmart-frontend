import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import getProducts from './reducer';
import addCustomer from './customerReducer';

export default combineReducers({
  // favorites: favoritesReducer,
  getProducts: getProducts,
  addCustomer: addCustomer
});