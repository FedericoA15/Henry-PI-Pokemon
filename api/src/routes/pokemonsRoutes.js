const { Router } = require("express");
const { createPokemonHandler, searchPokemonsHandler, searchPokemonIdHandler } = require("../Handler/pokemonHandler.js");
const validate = require("../Handler/Validate.js")
const router = Router();


router.get("/", searchPokemonsHandler)

router.get("/:id", searchPokemonIdHandler)

router.post("/",validate, createPokemonHandler )

module.exports = router;
