const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRoutes);
router.use("/types", pokemonTypesRoutes);
router.use("/pokemon", pokemonCreateRoutes)


module.exports = router;
