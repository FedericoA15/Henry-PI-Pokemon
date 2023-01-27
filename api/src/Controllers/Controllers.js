const { Pokemon, Type } = require("../db");
const { Sequelize } = require("sequelize");
const axios = require("axios");
const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon`;
const urlApiTypes = `https://pokeapi.co/api/v2/type`;

const getApiInfo = async () => {
  //funcion asincrona ?limit=2
  const apiUrl = await axios.get(urlApiPokemon + `?limit=100`); //obtengo el array results: [{name + url de los primeros 40}]
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
const getIdApi = async (id) => {
  try {
    const apiUrl = await axios.get(urlApiPokemon + `/` + id);
    return {
      id: apiUrl.data.id,
      name: apiUrl.data.name,
      type: apiUrl.data.types.map((el) => el.type.name),
      img: apiUrl.data.sprites.other.dream_world.front_default,
      hp: apiUrl.data.stats[0].base_stat,
      attack: apiUrl.data.stats[1].base_stat,
      defense: apiUrl.data.stats[2].base_stat,
      speed: apiUrl.data.stats[3].base_stat,
      height: apiUrl.data.height,
      weight: apiUrl.data.weight,
    };
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};
const getNameApi = async (name) => {
  try {
    const apiUrl = await axios.get(urlApiPokemon + `/` + name);
    return {
      id: apiUrl.data.id,
      name: apiUrl.data.name,
      type: apiUrl.data.types.map((el) => el.type.name),
      hp: apiUrl.data.stats[0].base_stat,
      attack: apiUrl.data.stats[1].base_stat,
      defense: apiUrl.data.stats[2].base_stat,
      speed: apiUrl.data.stats[3].base_stat,
      height: apiUrl.data.height,
      weight: apiUrl.data.weight,
    };
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};
const getTypesApi = async () => {
  const response = await axios.get(urlApiTypes);
  const types = response.data.results;
  const typeNames = [];
  for (let type of types) {
    let existingType = await Type.findOne({ where: { name: type.name } }); // lo que hago aca es buscar si ya tengo un type con tal nombre lo guardo en vez de crear otro para evitar pisar el id
    if (existingType) {
      typeNames.push(existingType);
    } else {
      const newType = await Type.create({
        name: type.name,
      });
      typeNames.push(newType);
    }
  }
  return typeNames;
};
// const getTypesApi = async () => {
//   const response = await axios.get(urlApiTypes);
//   const types = response.data.results;
//   const typeNames = [];
//   for (let type of types) {
//     const newType = await Type.create({
//       name: type.name,
//     });
//     typeNames.push(newType);
//   }
//   return typeNames;
// };
const serchType = async (types) => {
  const typ = await Type.findAll({
    where: { name: types },
  });
  if (!typ.length) {
    typ = await getTypesApi();
  }
  return typ;
};
// ----------------------------------
const createPokemon = async (
  name,
  img,
  type,
  hp,
  attack,
  defense,
  speed,
  height,
  weight
) => {
  return await Pokemon.create({
    name,
    img: img
      ? img
      : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    type: type.length ? type : ["normal"],
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });
};
// esto uso para que me muestre los datos de la tabla intermedia, pero ando buscando otro metodo por el momneto
// {
//   include: {
//     attributes: ["name"],
//     model: Type,
//     through: {
//       attributes: [],
//     },
//   },}
const getDbPokemon = async () => {
  const pokemons = await Pokemon.findAll();
  return pokemons;
};
const getId = async (id) => {
  try {
    const pokemons = await Pokemon.findOne({
      where: {
        id: id,
      },
    });
    return pokemons;
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};
const getName = async (name) => {
  try {
    const pokemon = await Pokemon.findOne({
      where: {
        name,
      },
    });
    if (!pokemon) {
      return { error: "Pokemon not found" };
    }
    return pokemon;
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};
const getPokemons = async () => {
  const api = await getApiInfo(); // una funcion que espera que se resuelve tanto el obtener la informacio de la api como de la base de datos para devolverlos concatenados
  const db = await getDbPokemon();
  return api.concat(db);
};
const deletePokemon = async (id) => {
  try {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error("Pokemon not found");
    }
    await pokemon.destroy();
    return pokemon;
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};
const updatePokemon = async (
  id,
  name,
  img,
  type,
  hp,
  attack,
  defense,
  speed,
  height,
  weight
) => {
  try {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error("Pokemon not found");
    }
    await pokemon.update({
      name,
      img: img
        ? img
        : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      type,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    return pokemon;
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};

module.exports = {
  serchType,
  getApiInfo,
  createPokemon,
  getDbPokemon,
  getId,
  getTypesApi,
  getPokemons,
  getName,
  getNameApi,
  getIdApi,
  deletePokemon,
  updatePokemon,
};
