const { Router } = require("express");
const { getApiInfo, createPokemon } = require("../Controllers/Controllers.js");
const router = Router();

router.get("/", async (req, res) => {
    const {name} = req.query;



  try {
    if(name){

    }else{
        let pokemonApi = await getApiInfo();
        return res.status(200).json(pokemonApi);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.get("/:id", (req,res)=>{
    const {id} = req.params
    try {
        
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
})

router.post("/", async (req, res) => {
  const { name, hp, attack, defense, height, weight } = req.body;
  try {
    if (!name) return res.status(404).send("Falta enviar datos obligatorios");
    const newPokemon = await createPokemon(
      name,
      hp,
      attack,
      defense,
      height,
      weight
    );
    res.status(201).json(newPokemon);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
