const Initial_state = {
    cartItems:JSON.parse(localStorage.getItem("cartItem"))
  };
  
  export default function cartReducer(state = Initial_state, action) {
    switch (action.type) {
      case "Cart_Items":
        return {...state, cartItems:[...action.payload]}
      default:
        return state;
    }
  }