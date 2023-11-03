const express = require("express");
const definitionService = require("../services/definition.service");
const { getDefinitionError, getDefinitionErrorMessage, getDefinitionMessage, postDefinitionError, postDefinitionErrorMessage, postDefinitionMessage, deleteDefinitionError, deleteDefinitionMessage, deleteDefinitionErrorMessage } = require("../utils/strings");
const router = express.Router();

router.get("/definition/:word", async (req, res) => {
  const word = await definitionService.getDefinition(req.params.word);
  if (!word) {
    res.status(401).send({error: getDefinitionError, message: getDefinitionErrorMessage(req.params.word) })
  } else {
    res.send({message: getDefinitionMessage(word.word), entry: word});
  }
});

router.post("/definition", async (req, res) => {
  const result = await definitionService.createDefinition(req.body);
  const totalEntries = await definitionService.entryCount(); 
  if (result) {
    res.send({message: postDefinitionMessage, entry: req.body, entries: totalEntries});
  } else {
    res.status(409).send({error: postDefinitionError, message: postDefinitionErrorMessage(req.body.word), entry: req.body, entries: totalEntries })
  }
});

router.patch("/definition/:word");

router.delete("/definition/:word", async (req, res) => {
  const result = await definitionService.deleteDefinition(req.params.word);
  const totalEntries = await definitionService.entryCount();
  if (result) {
    res.send({message: deleteDefinitionMessage(req.params.word), entry: result, total: totalEntries })
  } else {
    res.send({error: deleteDefinitionError, message: deleteDefinitionErrorMessage(req.params.word), total: totalEntries});
  }
});

module.exports = router;