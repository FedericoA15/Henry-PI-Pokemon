const { Router } = require("express");
const {getTypesApi} = require("../Controllers/Controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let type = await getTypesApi();
    res.status(201).json(type);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
