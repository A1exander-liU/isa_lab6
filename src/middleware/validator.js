const { missingError, missingMessage } = require("../utils/strings");

const newEntrySchema = {
  body: {
    word: "",
    definition: "",
    wordLanguage: "",
    definitionLanguage: ""
  }
}

const updateEntrySchema = {
  params: {
    word: "",
  },
  body: {
    definition: "",
    definitionLanguage: ""
  }
}

function validateMissing(schema, req) {
  const input = {};
  const missing = [];
  for (const location in schema) {
    for (const key in schema[location]) {
      const value = req[location][key];
      input[key] = (!value) ? "" : value;
      if (!value) {
        missing.push(key);
      }
    }
  }
  return [missing, input];
}

function missingValidator(schema) {
  return (req, res, next) => {
    const [missing, input] = validateMissing(schema, req);
    if (missing.length > 0) {
      res.status(400).send({ statusCode: 400, error: missingError, message: missingMessage(missing), entry: input });
    } else {
      next();
    }
  }
}

module.exports = {
  newEntrySchema,
  updateEntrySchema,
  missingValidator
}
