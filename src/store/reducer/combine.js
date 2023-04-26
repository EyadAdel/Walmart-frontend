import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import getProducts from './reducer';

export default combineReducers({
  // favorites: favoritesReducer,
  getProducts: getProducts
});