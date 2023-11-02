const definitionService = require("../services/definition.service");

class DefinitionController {
  async getDefinition(word) {
    return await definitionService.getDefinition(word);
  }
  createDefinition() {}
  updateDefinition() {}
  deleteDefinition() {}
}

const definitionController = new DefinitionController();
module.exports = definitionController;