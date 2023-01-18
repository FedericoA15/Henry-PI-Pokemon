import { GET_POKEMONS, GET_POKEMONID } from "./actions"

const initialState = {
  pokemons: [],
  pokemon: [],
  filterByName: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {...state, pokemons: action.payload}

    case GET_POKEMONID:
        return {...state, pokemon: action.payload}
    
   

     

    
    default:
      return {...state}
  }
};

export default reducer;
