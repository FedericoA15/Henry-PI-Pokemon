import { GET_POKEMONS, GET_POKEMONID, GET_TYPES, GET_POKEMON_NAME } from "./actions";

const initialState = {
  types: [],
  pokemons: [],
  pokemonDetail: [],
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
      return { ...state, pokemonDetail: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case GET_POKEMON_NAME:
      return { ...state, pokemonFilter: state.pokemons.filter((e)=> e.name === action.payload)}
    
    
     

    default:
      return { ...state };
  }
};

export default reducer;
