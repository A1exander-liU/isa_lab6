const express = require("express");
const definitionController = require("../controllers/definition.controller");
const { getDefinitionError, getDefinitionErrorMessage, getDefinitionMessage } = require("../utils/strings");
const router = express.Router();


router.get("/definition/:word", async (req, res) => {
  const word = await definitionController.getDefinition(req.params.word);
  if (!word) {
    res.status(401).send({error: getDefinitionError, message: getDefinitionErrorMessage(req.params.word) })
  } else {
    res.send({message: getDefinitionMessage(word.word), entry: word});
  }
});
router.post("/definition");
router.patch("/definition/:word");
router.delete("/definition/:word");

module.exports = router;