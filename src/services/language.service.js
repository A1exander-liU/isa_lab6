const prismaService = require("./prisma.service");

class LanugageService {
  async allLanguages() {
    const languages = await prismaService.language.findMany();
    return languages; 
  }
}

const languageService = new LanugageService();
module.exports = languageService;