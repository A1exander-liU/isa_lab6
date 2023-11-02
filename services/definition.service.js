const prisma = require("./prisma.service");

class DefinitionService {
  async getDefinition(word) {
    const result = await prisma.entry.findUnique({where: {word: word}});
    return result;
  }
  createDefinition() {}
  updateDefinition() {}
  deleteDefinition() {}
}

const definitionService = new DefinitionService();
module.exports = definitionService;