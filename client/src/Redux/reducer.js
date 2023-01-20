import {
  GET_POKEMONS,
  GET_POKEMONID,
  GET_TYPES,
  GET_POKEMON_NAME,
  FILTER_TYPE,
  FILTER_TYPE_TWO,
} from "./actions";

const initialState = {
  infoType: [],
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
      return { ...state, infoType: action.payload };
    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemonFilter: state.pokemons.filter((e) => e.name === action.payload),
      };
    case FILTER_TYPE:
      return {
        ...state,
        pokemonFilter: state.pokemons.filter((e) =>
          e.type.includes(action.payload)
        ),
      };
    case FILTER_TYPE_TWO: {
      const { firstType, secondType } = action.payload;
      const filteredPokemons = state.pokemons.filter(
        (pokemon) =>
          pokemon.type.includes(firstType) && pokemon.type.includes(secondType)
      );
      return { ...state, pokemonFilter: filteredPokemons };
    }
    default:
      return { ...state };
  }
};

export default reducer;
