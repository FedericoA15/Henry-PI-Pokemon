import { GET_POKEMONS, GET_POKEMONID, GET_TYPES } from "./actions";

const initialState = {
  types: [],
  pokemons: [],
  pokemon: [],
  pokemonFilter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pokemonFilter: action.payload,
      };
    case GET_POKEMONID:
      return { ...state, pokemon: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
     

    default:
      return { ...state };
  }
};

export default reducer;
