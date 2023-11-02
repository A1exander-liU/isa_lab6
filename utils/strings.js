const getDefinitionError = "Word not found";
function getDefinitionErrorMessage(word) {
  return `The word ${word} does not exist`;
}
function getDefinitionMessage(word) {
  return `${word} exists`
}

module.exports = {
  getDefinitionError,
  getDefinitionErrorMessage,
  getDefinitionMessage
}