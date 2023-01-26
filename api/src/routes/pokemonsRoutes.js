const { Router } = require("express");
const {
  createPokemonHandler,
  searchPokemonsHandler,
  searchPokemonIdHandler,
  deletePokemonHandlerDb,
  updatePokemonDb,
} = require("../Handler/pokemonHandler.js");

const validate = require("../Handler/Validate.js");

const router = Router();

router.get("/", searchPokemonsHandler);

router.get("/:id", searchPokemonIdHandler);

router.post("/", validate, createPokemonHandler);

router.put("/:id", updatePokemonDb);

router.delete("/:id", deletePokemonHandlerDb);

module.exports = router;
