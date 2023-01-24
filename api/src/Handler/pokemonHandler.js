const {
    serchType,
    createPokemon,
    getName,
    getId,
    getPokemons,
    getNameApi,
    getIdApi,
  } = require("../Controllers/Controllers.js");

const createPokemonHandler = async (req,res) => {
    const { name, img, type, hp, attack, defense, speed, height, weight } =
    req.body;
  let search = await getNameApi(name.toLowerCase());
  // busqueda en la base de datos
  if (search.error) {
    // no encontrado en la API externa
    search = await getName(name.toLowerCase());
  }
  if (search) {
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
    let foundTypes = await serchType(type);
    const typeIds = foundTypes.map((type) => type.id);
    await newPokemon.addTypes(typeIds);
    res.status(201).json(`Pokemon created successfully`);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
const searchPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let pokemon;
    if (name) {
      pokemon = await getNameApi(name.toLowerCase());
      if (pokemon.error) {
        pokemon = await getName(name.toLowerCase());
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

const searchPokemonIdHandler = async (req,res) => {
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
}


module.exports= {
    createPokemonHandler,
    searchPokemonsHandler,
    searchPokemonIdHandler
}