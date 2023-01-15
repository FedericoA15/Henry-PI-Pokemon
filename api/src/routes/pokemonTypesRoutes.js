const { Router } = require("express");
const { Type } = require("../db");
const axios = require("axios");

// const { getTypeApi } = require("../Controllers/Controllers.js");
const router = Router();
const getTypeApi = async () => {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/type");
  const types = [];
  for (let i = 0; i < 20; i++) {
    types.push(apiUrl.data.results[i].name)
  }
 
  console.log(types);
  return await Type.saveStrings(types)
  
};

router.get("/", async (req, res) => {
  try {
    const type = await getTypeApi();
      res.status(201).json(type);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
