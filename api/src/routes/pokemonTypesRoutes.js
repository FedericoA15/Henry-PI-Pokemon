const { Router } = require("express");
const { Type } = require("../db");
const axios = require("axios");

// const { getTypeApi } = require("../Controllers/Controllers.js");
const router = Router();
const getTypesApi = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  const types = response.data.results;
  const typeNames = [];
  for (let type of types) {
    const newType = await Type.create({
      name: type.name,
    });
    typeNames.push(newType);
  }
  return typeNames;
};

router.get("/", async (req, res) => {
  try {
    const type = await getTypesApi();
      res.status(201).json(type);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
