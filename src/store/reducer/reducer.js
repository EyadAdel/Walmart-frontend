const Initial_state = {
  getAllProducts: [],
  cartItems:JSON.parse(localStorage.getItem("cartItem"))
};

export default function getProducts(state = Initial_state, action) {
  switch (action.type) {
    case "GET_products":
      return { ...state, getAllProducts: [...action.payload] };
    case "Cart_Items":
      return {...state, cartItems:[...action.payload]}
    default:
      return state;
  }
}