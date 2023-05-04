import cartItems from "../actions/card";

const token = localStorage.getItem('Token');

const Initial_state = {
  cartItems: (token) ? JSON.parse(localStorage.getItem("CustomerDetails")) :
    JSON.parse(localStorage.getItem("cartItem"))
};

export default function getProducts(state = Initial_state, action) {
  // console.log(action);
  switch (action.type) {
    case "Cart_Items":
      if (token) {
        // User has a token, use customerDetails
        // const initialState = {
        //   cartItems: JSON.parse(localStorage.getItem('customerDetails'))
        // }
        return { ...state, cartItems: [...action.payload.cart] }
      } else {
        // User does not have a token, use cartItems
        // const initialState = {
        //   cartItems: JSON.parse(localStorage.getItem('cartItems'))
        // }
        return { ...state, cartItems: [...action.payload] }
      }
    default:
      return state;
  }
}