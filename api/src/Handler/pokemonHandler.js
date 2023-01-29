const {
  serchType,
  createPokemon,
  getName,
  getId,
  getPokemons,
  getNameApi,
  getIdApi,
  deletePokemon,
  updatePokemon,
} = require("../Controllers/Controllers.js");

const createPokemonHandler = async (req, res) => {
  const { name, img, type, hp, attack, defense, speed, height, weight } =
    req.body;
  let search = await getNameApi(name.toLowerCase()); // una verificacion tanto por api como por base de datos para ver que el nombre no se pueda repetir
  if (search.error) {
    search = await getName(name.toLowerCase()); // en caso de que por api que la linea 16 devuelva a search con la propiedad error significa que no encontro por api por lo tantto busco por db
  }
  if (!search.error) {
    return res.status(400).json({ error: "Pokemon name already exists." });   // en caso de que search no tenga la propiedad error sig que si existe el pokemon con ese nombre porque no fallo la funcion getName
  }
  try {
    if (!name) return res.status(404).send("Falta enviar datos obligatorios"); //pongo como dato obligatorio el name
    const newPokemon = await createPokemon(
      name,
      img,
      type,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    );
    let foundTypes = await serchType(type); // esta func me busca los tipos de pokemons que vienen por body (los devuelve en un array por el metodo fianAll)
    const typeIds = foundTypes.map((type) => type.id); // haga un map de foundTypes que corresponde por cada tipo de pokemon que manda  y busco el id y si conicidie lo agrego ese tipo en el await
    await newPokemon.addTypes(typeIds);
    res.status(201).json(`Pokemon created successfully`);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}; // funcion para crear pokemon

const searchPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let pokemon;
    if (name) { // en caso de que exista name el la url ejecuta este if
      pokemon = await getNameApi(name.toLowerCase()); // busca por api y misma logica que antes si devuelve con la prop error busco por db
      if (pokemon.error) {
        pokemon = await getName(name.toLowerCase()); // y si pokemon no existe direc devuelve 404 status en caso de no encontrar por db ni api
        if (!pokemon) {
          return res.status(404).json({ error: "Pokemon not found" });
        }
      }
    } else {
      pokemon = await getPokemons(); // en caso de no existe name me traigo todo los pokemons
    }
    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const searchPokemonIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    let pokemon;
    pokemon = await getIdApi(id);
    if (pokemon.error) {
      pokemon = await getId(id); // misma logica para buscar tanto por api que por db
    }
    res.status(200).json(pokemon);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
const deletePokemonHandlerDb = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonDelete = await deletePokemon(id);
    res.status(200).json(pokemonDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updatePokemonDb = async (req, res) => {
  const { id } = req.params;
  const { name, img, type, hp, attack, defense, speed, height, weight } =
    req.body;
  try {
    const pokemonUpdate = await updatePokemon(id, name, img, type, hp, attack, defense, speed, height, weight);
    let foundTypes = await serchType(type);
    const typeIds = foundTypes.map((type) => type.id);
    await pokemonUpdate.addTypes(typeIds);
    res.status(200).json(pokemonUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createPokemonHandler,
  searchPokemonsHandler,
  searchPokemonIdHandler,
  deletePokemonHandlerDb,
  updatePokemonDb,
};
