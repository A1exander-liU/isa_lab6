const express = require("express");
const definitionService = require("../services/definition.service");
const { getDefinitionMessage, getDefinitionError, postDefinitionMessage, postDefinitionError, postDefinitionErrorMessage, deleteDefinitionMessage, deleteDefinitionError, deleteDefinitionErrorMessage, getDefinitionErrorMessage, patchDefinitionMessage, patchDefinitionError, patchDefinitionErrorMessage } = require("../utils/strings");
const { missingValidator, newEntrySchema } = require("../middleware/validator");
const router = express.Router();

router.get("/v1/definition/:word", async (req, res) => {
  const entry = await definitionService.getDefinition(req.params.word);
  if (entry) {
    res.send({ statusCode: 200, message: getDefinitionMessage(entry.word), entry });
  } else {
    res.status(404).send({ statusCode: 404, error: getDefinitionError, message: getDefinitionErrorMessage(req.params.word) });
  }
});

router.post("/v1/definition", missingValidator(newEntrySchema), async (req, res) => {
  const newEntryData = req.body;
  const newEntry = await definitionService.createDefinition(newEntryData);
  const totalEntries = await definitionService.entryCount();
  if (newEntry) {
    res.status(201).send({ statusCode: 201, message: postDefinitionMessage, entry: newEntry, total: totalEntries });
  } else {
    res.status(409).send({ statusCode: 409, error: postDefinitionError, message: postDefinitionErrorMessage(newEntryData.word), total: totalEntries });
  }
});


router.patch("/v1/definition/:word", async (req, res) => {
  const word = req.params.word;
  const definition = req.body.definition;
  const definitionLanguage = req.body.definitionLanguage;
  const updatedEntry = await definitionService.updateDefinition(word, definition, definitionLanguage);
  const totalEntries = await definitionService.entryCount();
  if (updatedEntry) {
    res.send({ statusCode: 200, message: patchDefinitionMessage, entry: updatedEntry, total: totalEntries });
  } else {
    const entry = {
      word,
      definition,
      definitionLanguage
    }
    res.status(404).send({ statusCode: 404, error: patchDefinitionError, message: patchDefinitionErrorMessage(word), entry, total: totalEntries });
  }
});

router.delete("/v1/definition/:word", async (req, res) => {
  const word = req.params.word;
  const deletedEntry = await definitionService.deleteDefinition(word);
  const totalEntries = await definitionService.entryCount();
  if (deletedEntry) {
    res.send({ statusCode: 200, message: deleteDefinitionMessage(deletedEntry.word), entry: deletedEntry, total: totalEntries });
  } else {
    res.status(404).send({ statusCode: 404, error: deleteDefinitionError, message: deleteDefinitionErrorMessage(word), total: totalEntries });
  }
});

module.exports = router;