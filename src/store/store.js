import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import getProducts from "./reducer/productsReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import addCustomer from "./reducer/customerReducer";
import cartReducer from './reducer/cartReducer';

const reducer = combineReducers({
  getProducts,
  addCustomer,
  cartReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
