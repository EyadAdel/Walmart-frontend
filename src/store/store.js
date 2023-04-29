import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import getProducts from "./reducer/reducer";
import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import addCustomer from "./reducer/customerReducer";



const store = createStore(
  getProducts,
  // addCustomer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

