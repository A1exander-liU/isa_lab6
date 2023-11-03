const e = require("express");
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
  async deleteDefinition(word) {
    try {
      const entry = await prisma.entry.delete({where: {word: word}});
      return entry;
    } catch(_) {
      return null;
    }
  }
  async entryCount() {
    const entries = await prisma.entry.findMany();
    return entries.length;
  }
}

const definitionService = new DefinitionService();
module.exports = definitionService;