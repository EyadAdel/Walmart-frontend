import { legacy_createStore as createStore } from "redux";

import getProducts from "./reducer/reducer";

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";

const store = createStore(getProducts, applyMiddleware(thunk));

export default store;
