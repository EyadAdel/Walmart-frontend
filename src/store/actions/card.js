
export default function cartItems(params) {
  let token = localStorage.getItem("Token");
  // return (dispatch) => {
  //   // return dispatch({ type: "Cart_Items", payload: JSON.parse(localStorage.getItem("cartItem")) });
  // }
  return { type: "Cart_Items", payload:  (token)?JSON.parse(localStorage.getItem("CustomerDetails"))
  :JSON.parse(localStorage.getItem("cartItem"))}
}
