// Write a function that takes a word and returns true if the word ends with tonica

function wordCheck(word) {
  let regex = /tonica$/;
  let result = regex.test(word);
  return result;
}

console.log(wordCheck('elect'));
console.log(wordCheck('Techtonica'));
console.log(wordCheck('tonica'));
console.log(wordCheck('tonicasauce'));
