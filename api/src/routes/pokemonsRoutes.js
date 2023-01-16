const { Router } = require("express");
const {
  serchType,
  createPokemon,
  getName,
  getId,
  getPokemons,
  getTypesApi,
  getNameApi,
  getIdApi,
} = require("../Controllers/Controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let pokemon;
    if (name) {
      pokemon = await getNameApi(name.toLowerCase());
      if (pokemon.error) {
        pokemon = await getName(name.toLowerCase());
      }
    } else {
      pokemon = await getPokemons();
    }
    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
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
});

router.post("/", async (req, res) => {
  const { name, hp, attack, defense, height, weight, types } = req.body;
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
      hp,
      attack,
      defense,
      height,
      weight,
      types
    );
    let foundTypes = await serchType(types);
    const typeIds = foundTypes.map((type) => type.id);
    console.log(typeIds);
    await newPokemon.addTypes(typeIds);
    res.status(201).json(`Pokemon created successfully ${newPokemon.name}`);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
