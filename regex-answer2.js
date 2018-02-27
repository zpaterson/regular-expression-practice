// Write a function expression that takes a string replaces all instances of symantec with semantic?

function wordCheck(myStr) {
  let regex = /symantec/gi;
  let wordReplace = 'semantic';
  let result = myStr.replace(regex,wordReplace);
  return result;
}
console.log(wordCheck('Thanks symantec for the cool workspace! Symantec is great!'));
