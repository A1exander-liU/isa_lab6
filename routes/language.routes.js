const express = require("express");
const languageController = require("../controllers/language.controller");
const router = express.Router();

router.get("/languages", async (req, res) => {
  const languages = await languageController.allLanguages();
  res.send({languages});
});

module.exports = router;