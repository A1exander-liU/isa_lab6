const express = require("express");
const languageService = require("../services/language.service");
const { getLanguagesMessage } = require("../utils/strings");
const router = express.Router();

router.get("/v1/languages", async (req, res) => {
  const languages = await languageService.allLanguages();
  res.send({ message: getLanguagesMessage, languages })
});

module.exports = router;