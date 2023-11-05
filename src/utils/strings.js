const getLanguagesMessage = "Successfully retrieved languages";

const getDefinitionError = "Word does not exist";
function getDefinitionErrorMessage(word) {
  return `Unable to get word ${word}, it does not exist`;
}
function getDefinitionMessage(word) {
  return `Successfully retrieved entry for word ${word}`
}

const postDefinitionError = "Word conflict";
function postDefinitionErrorMessage(word) {
  return `Unable to create new entry, word ${word} it already exists`;
}
const postDefinitionMessage = "Entry created successfully";

const deleteDefinitionError = "Word does not exist";
function deleteDefinitionErrorMessage(word) {
  return `Unable to delete entry for word ${word}, it does not exist`;
}
function deleteDefinitionMessage(word) {
  return `Successfully deleted entry for word ${word}`;
}

const patchDefinitionError = "Word does not exist";
function patchDefinitionErrorMessage(word) {
  return `Unable to update entry for word ${word}, it does not exist`;
}
const patchDefinitionMessage = "Successfully updated entry"

module.exports = {
  getLanguagesMessage,
  getDefinitionError,
  getDefinitionErrorMessage,
  getDefinitionMessage,
  postDefinitionError,
  postDefinitionErrorMessage,
  postDefinitionMessage,
  deleteDefinitionError,
  deleteDefinitionErrorMessage,
  deleteDefinitionMessage,
  patchDefinitionError,
  patchDefinitionErrorMessage,
  patchDefinitionMessage
}