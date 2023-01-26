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
  let search = await getNameApi(name.toLowerCase());
  if (search.error) {
    search = await getName(name.toLowerCase());
  }
  if (!search.error) {
    return res.status(400).json({ error: "Pokemon name already exists." });
  }
  try {
    if (!name) return res.status(404).send("Falta enviar datos obligatorios");
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

    res.status(201).json(`Pokemon created successfully`);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const searchPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let pokemon;
    if (name) {
      pokemon = await getNameApi(name.toLowerCase());
      if (pokemon.error) {
        pokemon = await getName(name.toLowerCase());
        if (!pokemon) {
          return res.status(404).json({ error: "Pokemon not found" });
        }
      }
      if (!pokemon) {
        return res.status(404).json({ error: "Pokemon not found" });
      }
    } else {
      pokemon = await getPokemons();
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
      pokemon = await getId(id);
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
