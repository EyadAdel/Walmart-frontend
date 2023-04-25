
export default function cartItems(params) {
  // return (dispatch) => {
  //   // return dispatch({ type: "Cart_Items", payload: JSON.parse(localStorage.getItem("cartItem")) });
  // }
  return { type: "Cart_Items", payload: JSON.parse(localStorage.getItem("cartItem")) }
}
