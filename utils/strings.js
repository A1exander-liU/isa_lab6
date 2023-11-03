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

module.exports = {
  getDefinitionError,
  getDefinitionErrorMessage,
  getDefinitionMessage,
  postDefinitionError,
  postDefinitionErrorMessage,
  postDefinitionMessage,
}