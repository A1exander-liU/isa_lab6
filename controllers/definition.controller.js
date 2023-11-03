const definitionService = require("../services/definition.service");

class DefinitionController {
  async getDefinition(word) {
    return await definitionService.getDefinition(word);
  }
  async createDefinition(entry) {
    return await definitionService.createDefinition(entry);
  }
  updateDefinition() {}
  deleteDefinition() {}
}

const definitionController = new DefinitionController();
module.exports = definitionController;