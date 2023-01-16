const { Router } = require("express");
const {
  createPokemon,
  getName,
  getId,
  getPokemons,
  getTypesApi,
  getNameApi,
  getIdApi,
} = require("../Controllers/Controllers.js");
const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let pokemon;
    if (name) {
      pokemon = await getNameApi(name.toLowerCase());
      if(pokemon.error){
         pokemon = await getName(name.toLowerCase());
      }
    } else {
       pokemon = await getPokemons();
    }
    res.status(200).json(pokemon);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let pokemon
    pokemon = await getIdApi(id);
    if(pokemon.error){
      pokemon = await getId(id)
    }
    res.status(200).json(pokemon)
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, hp, attack, defense, height, weight, types } = req.body;
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

    const foundTypes = await Type.findAll({
      where: { name: types },
    });
    if (!foundTypes.length) {
      foundTypes = await getTypesApi();
    }
    const typeIds = foundTypes.map((type) => type.id);
    await newPokemon.addTypes(typeIds);
    res.status(201).json(newPokemon); //`Pokemon created successfully ${newPokemon.name}`
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
