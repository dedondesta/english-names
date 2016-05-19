var capitalizeFirstLetter = require('./string-manipulation.js').capitalizeFirstLetter; 
var uniqueRandomArray = require('unique-random-array');
var englishNamesObj = require('./english-names.json');
var englishNamesArr = [];
for(var prop in englishNamesObj) {
  var newName = capitalizeFirstLetter(englishNamesObj[prop].name);
  englishNamesArr.push(newName);
}

module.exports = {
  all: englishNamesArr,
  random: uniqueRandomArray(englishNamesArr),
};
