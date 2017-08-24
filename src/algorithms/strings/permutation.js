/*
  Cracking the Coding Interview 1.2

  Given two strings, check if one is a permutation of the other
*/
/*
  1. traverse str1, check if each char is in str 2;
  2. if the char is in str2 then remove it
  3. at the end of the loop, if str2 is empty then they are permutaions
*/
function checkPermutation(str1, str2) {
  // two strings must be the same length if they are permutations of each other
  if (str1.length != str2.length) return false;
  var index;
  var arr = str2.split('');
  for (var char in str1) {
    index = arr.indexOf(str1[char]);
    if (index >= 0) arr.splice(index, 1);
    else return false;
  }
  return (arr.length == 0) ? true : false;

}

console.log(checkPermutation('', ''));
console.log(checkPermutation('a', 'a'));
console.log(checkPermutation('ab', 'ba'));
console.log(checkPermutation('acba', 'abab'));
console.log(checkPermutation('boo', 'oob'));
console.log(checkPermutation('cccc', 'aaaa'));
