export const pokeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        pokeList: action.payload,
      };

    case "GET_SEARCHED_POKEMON":
      return {
        ...state,
        pokeList: action.payload,
      };

    default:
      return state;
  }
};
