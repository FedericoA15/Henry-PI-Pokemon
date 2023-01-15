const { Router } = require('express');
const axios = require('axios');
const  pokemonsRoutes  = require("./pokemonsRoutes.js")
const  pokemonTypesRoutes  = require("./pokemonTypesRoutes.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRoutes);
router.use("/types", pokemonTypesRoutes);


module.exports = router;
