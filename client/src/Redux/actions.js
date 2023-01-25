import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONID = "GET_POKEMONID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_TYPE_TWO = "FILTER_TYPE_TWO";
export const FILTER_DB = "FILTER_DB";
export const FILTER_API = "FILTER_API";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const DELETE_POKEMON = "DELETE_POKEMON";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};
export const getPokemonId = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMONID, payload: pokemon });
  };
};
export const getPokemonName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const pokemon = apiData.data.name;
    console.log(pokemon);
    dispatch({ type: GET_POKEMON_NAME, payload: pokemon });
  };
};
export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/types`);
    const type = apiData.data;
    dispatch({ type: GET_TYPES, payload: type });
  };
};


export const filterType = (type) => {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
};
export const filterTypeTwo = (firstType, secondType) => {
  return {
    type: FILTER_TYPE_TWO,
    payload: { firstType, secondType },
  };
};
export const filterByApi = () => {
  return {
    type: FILTER_API,
  };
};
//preguntar si es correcto pasar el payload vacio o que no exista directamente
export const filterByDb = () => {
  return {
    type: FILTER_DB,
    payload: {},
  };
};
export const sortByAttack = (method) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: method,
  };
};
export const sortByName = (method) => {
  return {
    type: ORDER_BY_NAME,
    payload: method,
  };
};
export const deletedPokemon = (id) => {
  return async function (dispatch) {
    const apiData = await axios.delete(`http://localhost:3001/pokemons/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: DELETE_POKEMON, payload: pokemon });
  };
}



