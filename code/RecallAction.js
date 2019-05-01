/**
 * Gets a verbal response when user wishes to recall information from memory.
 */
module.exports.function = function recallAction (recallInput, $vivContext) {
  var console = require('console');
  var utility = require("util.js");
  var db = require("db.js")
  var find = require("find.js")
  var cleanedInput = utility.cleanString(recallInput);
  console.log("Exact Input: " + recallInput);
  console.log("Cleaned Input: " + cleanedInput);
  var memories = db.loadMemories($vivContext.userId);
  var bestMemories = find.findTextInMemories(cleanedInput, memories);
  if (bestMemories && bestMemories.length > 0) {
    console.log('final sorted memories are', bestMemories)
    var numWordsInInput = cleanedInput.split(' ').length;
    // TODO: add in an indicator of how long ago you told me
    // TODO: add layouts that show the other possible options
    if (bestMemories[0].numWords === 0) {
      return "You asked me to recall " + cleanedInput + '. I do not have a memory that contains anything like that.';
    } else if (bestMemories[0].numWords < numWordsInInput) {
      return "You asked me to recall " + cleanedInput + '. The closed thing I can remember is that you told me ' + bestMemories[0].text + '.';
    } else {
      return "You asked me to recall " + cleanedInput + '. You told me ' + bestMemories[0].text + '.';
    }
  } else {
    return 'I do not have any memories yet, please give me something to remember first.'
  }
}
