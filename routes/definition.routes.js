const express = require("express");
const definitionController = require("../controllers/definition.controller");
const { getDefinitionError, getDefinitionErrorMessage, getDefinitionMessage, postDefinitionError, postDefinitionErrorMessage, postDefinitionMessage } = require("../utils/strings");
const router = express.Router();


router.get("/definition/:word", async (req, res) => {
  const word = await definitionController.getDefinition(req.params.word);
  if (!word) {
    res.status(401).send({error: getDefinitionError, message: getDefinitionErrorMessage(req.params.word) })
  } else {
    res.send({message: getDefinitionMessage(word.word), entry: word});
  }
});
router.post("/definition", async (req, res) => {
  const result = await definitionController.createDefinition(req.body);
  if (result) {
    res.send({message: postDefinitionMessage, entry: req.body});
  } else {
    res.status(409).send({error: postDefinitionError, message: postDefinitionErrorMessage(req.body.word), entry: req.body})
  }
});
router.patch("/definition/:word");
router.delete("/definition/:word");

module.exports = router;