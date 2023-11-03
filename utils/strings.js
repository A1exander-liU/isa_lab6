const getDefinitionError = "Word not found";
function getDefinitionErrorMessage(word) {
  return `The word ${word} does not exist`;
}
function getDefinitionMessage(word) {
  return `${word} exists`
}

const postDefinitionError = "Word conflict";
function postDefinitionErrorMessage(word) {
  return `The word ${word} already exists`
}
const postDefinitionMessage = "Entry created successfully";

const deleteDefinitionError = "Word not found";
function deleteDefinitionErrorMessage(word) {
  return `Unable to delete word ${word}, it does not exist`;
}
function deleteDefinitionMessage(word) {
  return `Successfully delete word ${word}`;
}

module.exports = {
  getDefinitionError,
  getDefinitionErrorMessage,
  getDefinitionMessage,
  postDefinitionError,
  postDefinitionErrorMessage,
  postDefinitionMessage,
  deleteDefinitionError,
  deleteDefinitionErrorMessage,
  deleteDefinitionMessage
}