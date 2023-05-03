const Initial_state = {
  getAllProducts: [],
};

export default function productsReducer(state = Initial_state, action) {
  switch (action.type) {
    case "GET_products":
      return { ...state, getAllProducts: [...action.payload] };
    default:
      return state;
  }
}