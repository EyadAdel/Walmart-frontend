const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export function addFavorirts(product) {
    return {
      type: "ADD_TO_FAVORITES",
      payload: product,
    };
  }
  export function removeFavorirts(productId) {
    return {
      type: "REMOVE_FROM_FAVORITES",
      payload: productId,
    };
  }
  