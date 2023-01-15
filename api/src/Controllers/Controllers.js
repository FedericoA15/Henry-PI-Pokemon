const { Pokemon, Type } = require("../db");
const { Sequelize } = require("sequelize");
const axios = require("axios");

const getApiInfo = async () => {
  //funcion asincrona
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60"); //obtengo el array results: [{name + url de los primeros 40}]
  const pokeUrl = []; // uso este array para poner la url de cada pokemon despues de realizar el foreach
  apiUrl.data.results.forEach((el) => {
    pokeUrl.push(axios.get(el.url).then((resp) => resp.data)); //pusheo el contenido de la url de c/pokemon(obj {name, id, img, etc})
  });

  const apiInfo = Promise.all(pokeUrl) //Promise.all espera que todas las promesas se cumplan y si se da...
    .then((res) =>
      res.map((p) => {
        //toma la respuesta y mapea por cada pokemon la info necesaria
        return {
          id: p.id,
          name: p.name,
          img: p.sprites.other.dream_world.front_default,
          type: p.types.map((el) => el.type.name),
          health: p.stats[0].base_stat,
          attack: p.stats[1].base_stat,
          defense: p.stats[2].base_stat,
          speed: p.stats[5].base_stat,
          height: p.height,
          weight: p.weight,
        }; //devuelve toda la info
      })
    );
  return await apiInfo; //espera a que apiInfo reciba toda la info y cuando termina getApiInfo() devuelve esa const si la ejecutamos
};
const getTypeApi = async () => {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/type");
  console.log(apiUrl);
};
const createPokemon = async (name, hp, attack, defense, height, weight) => {
  return await Pokemon.create({ name, hp, attack, defense, height, weight });
};

module.exports = {
  getApiInfo,
  createPokemon,
  getTypeApi,
};
