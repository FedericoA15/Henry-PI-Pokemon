import {
  GET_POKEMONS,
  GET_POKEMONID,
  GET_TYPES,
  GET_POKEMON_NAME,
  FILTER_TYPE,
  FILTER_TYPE_TWO,
  FILTER_DB,
  FILTER_API,
  ORDER_BY_ATTACK,
  ORDER_BY_NAME,
  DELETE_POKEMON,
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
      const filteredPokemon = state.pokemons.filter(
        (e) => e.name === action.payload
      );
      return {
        ...state,
        pokemonFilter: filteredPokemon.length > 0 ? filteredPokemon : [],
      };
    case FILTER_TYPE:
      return {
        ...state,
        pokemonFilter: state.pokemons.filter((e) =>
          e.type.includes(action.payload)
        ),
      };
    case FILTER_TYPE_TWO:
      const { firstType, secondType } = action.payload;
      const filteredPokemonsType = state.pokemons.filter(
        (pokemon) =>
          pokemon.type.includes(firstType) && pokemon.type.includes(secondType)
      );
      return { ...state, pokemonFilter: filteredPokemonsType };
    case FILTER_DB:
      return {
        ...state,
        pokemonFilter: state.pokemons.filter((p) => typeof p.id === "string"),
      };
    case FILTER_API:
      return {
        ...state,
        pokemonFilter: state.pokemons.filter((p) => typeof p.id === "number"),
      };
    case ORDER_BY_ATTACK:
      // if (action.payload === "asc") {
      //   return {
      //     ...state,
      //     pokemonFilter: state.pokemons.slice().sort((a, b) => {
      //       return b.attack - a.attack;
      //     }),
      //   };
      // } else if (action.payload === "desc") {
      //   return {
      //     ...state,
      //     pokemonFilter: state.pokemons.slice().sort((a, b) => {
      //       return a.attack - b.attack;
      //     }),
      //   };
      // }
      const orderAttack =
        action.payload === "asc"
          ? state.pokemons.slice().sort((a, b) => {
              return b.attack - a.attack;
            })
          : state.pokemons.slice().sort((a, b) => {
              return a.attack - b.attack;
            });
      return {
        ...state,
        pokemonFilter: orderAttack,
      };
    case ORDER_BY_NAME:
      const order =
        action.payload === "asc"
          ? state.pokemons.slice().sort((a, b) => {
              let first = a.name.toLowerCase();
              let second = b.name.toLowerCase();
              if (first > second) return 1;
              if (first < second) return -1;
              return 0;
            })
          : state.pokemons.slice().sort((a, b) => {
              let first = a.name.toLowerCase();
              let second = b.name.toLowerCase();
              if (first > second) return -1;
              if (first < second) return 1;
              return 0;
            });
      return {
        ...state,
        pokemonFilter: order,
      };
    case DELETE_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        pokemonFilter: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
