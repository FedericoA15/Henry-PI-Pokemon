import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONID = "GET_POKEMONID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"
export const GET_TYPES = "GET_TYPES"
 
export const getPokemons = () => {
    return async function(dispatch) {
        const apiData = await axios.get(
            "http://localhost:3001/pokemons"
        );
        const pokemons = apiData.data;
        dispatch( { type: GET_POKEMONS, payload: pokemons} )
    }
}

export const getPokemonId = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/pokemons/${id}`
        )
        const pokemon = apiData.data;
        dispatch ({ type: GET_POKEMONID, payload: pokemon })
    }
}

export const getPokemonName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/pokemons/?name=${name}`
        )
        const pokemon = apiData.data.name;
        console.log(pokemon);
        dispatch ({ type: GET_POKEMON_NAME, payload: pokemon })
    }
}
export const getTypes = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/types`
        )
        const type = apiData.data;
        dispatch ({ type: GET_TYPES, payload: type })
    }
}










