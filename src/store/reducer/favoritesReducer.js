const initialState = {
    fav: [],
  };
  
  const favoritesReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return { ...state, fav: [...state.fav, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        fav: state.fav.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    default:
      return state;
  }
  };
  export default favoritesReducer;