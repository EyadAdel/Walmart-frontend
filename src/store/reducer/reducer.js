const Initial_state = {
  getAllProducts: [],

  page: 1,
};

export default function getProducts(state = Initial_state, action) {
  switch (action.type) {
    case "GET_products":
      return { ...state, getAllProducts: [...action.payload] };

    default:
      return state;
  }
}
