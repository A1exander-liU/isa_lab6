const prisma = require("./prisma.service");

class DefinitionService {
  async getDefinition(word) {
    const result = await prisma.entry.findUnique({where: {word: word}});
    return result;
  }
  async createDefinition(entry) {
    try {
      await prisma.entry.create({
        data: {
          word: entry.word, 
          definition: entry.definition,
          wordLanguage: entry.wordLanguage,
          definitionLanguage: entry.definitionLanguage
        }
      });
      return true;
    } catch(_) {
      return false;
    }
  }
  updateDefinition() {}
  deleteDefinition() {}
  async entryCount() {
    const entries = await prisma.entry.findMany();
    return entries.length;
  }
}

const definitionService = new DefinitionService();
module.exports = definitionService;