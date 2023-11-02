const languageService = require("../services/language.service");

class LanguageController {
  async allLanguages() {
    return await languageService.allLanguages();
  }
}

const languageController = new LanguageController();
module.exports = languageController;