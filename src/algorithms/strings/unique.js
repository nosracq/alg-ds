/*
  Cracking the Coding Interview 1.1
  
  Determines if a string has all unique chars
*/

function isUnique(str) {
  // check for an empty string
  if(str == '') return true;

  var used = [];
  for(var char in str) {
    if (used.indexOf(str[char]) >= 0) return false;
    else used.push(str[char]);
  }
  return true;
}

console.log(isUnique('bad apple'));
console.log(isUnique('cat'));
console.log(isUnique(''));
console.log(isUnique('a'));
console.log(isUnique('aaaaaaaaaaaaaaaaa'));
