const express = require("express");
const definitionService = require("../services/definition.service");
const { getDefinitionMessage, getDefinitionError, postDefinitionMessage, postDefinitionError, postDefinitionErrorMessage, deleteDefinitionMessage, deleteDefinitionError, deleteDefinitionErrorMessage, getDefinitionErrorMessage } = require("../utils/strings");
const router = express.Router();

router.get("/v1/definition/:word", async (req, res) => {
  const entry = await definitionService.getDefinition(req.params.word);
  if (entry) {
    res.send({ message: getDefinitionMessage(entry.word), entry });
  } else {
    res.status(404).send({ error: getDefinitionError, message: getDefinitionErrorMessage(req.params.word) });
  }
});

router.post("/v1/definition", async (req, res) => {
  const newEntryData = req.body;
  const newEntry = await definitionService.createDefinition(newEntryData);
  const totalEntries = await definitionService.entryCount();
  if (newEntry) {
    res.status(201).send({ message: postDefinitionMessage, entry: newEntry, total: totalEntries });
  } else {
    res.status(409).send({ error: postDefinitionError, message: postDefinitionErrorMessage(newEntryData.word), total: totalEntries });
  }
});


router.patch("/v1/definition", async (req, res) => {

});

router.delete("/v1/definition/:word", async (req, res) => {
  const word = req.params.word;
  const deletedEntry = await definitionService.deleteDefinition(word);
  const totalEntries = await definitionService.entryCount();
  if (deletedEntry) {
    res.send({ message: deleteDefinitionMessage(deletedEntry.word), entry: deletedEntry, total: totalEntries });
  } else {
    res.status(404).send({ error: deleteDefinitionError, message: deleteDefinitionErrorMessage(word), total: totalEntries });
  }
});

module.exports = router;