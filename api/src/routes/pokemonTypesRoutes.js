const { Router } = require("express");
const getTypeHandler = require("../Handler/typeHandler");
const router = Router();

router.get("/", getTypeHandler)

module.exports = router;
