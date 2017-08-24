/*
  Cracking the Coding Interview: 1.5

  Checks if the given strings are one edit away from each other.
  Three types of edits can be made: insert a char, remove a char or replace a char

*/

/*
  1. Check if they are the same string
  2. traverse both strings at the same time
      a. check if difference count is greater than 1
          i. if so then return false
      a. if they contain the same letter at the same index then continue
      b. if they are different then increment then check the next char

*/

function oneAway(str1, str2) {

  if(str1 === str2) return true;
  else if(Math.abs(str1.length - str2.length) > 1) return false;

  var count = 0;
  var shortest = (str1.length <= str2.length) ? str1 : str2;
  var longest = (shortest === str1) ? str2 : str1;

  var li = 0
  for(var si = 0, n = shortest.length; si < n; si++) {
    if(count > 1) return false;

    if(shortest[si] != longest[li]) {
      // check for the remove/add case, they are the same since they are assigned
      // to shortest and longest
      if (shortest[si + 1] == longest[li + 1]) {
        count++;
      }
      // check for the replace case
      else if(shortest[si] == longest[li+1]) {
        count++;
        li++;
      }
    }
    li++;
  }
  return (count > 1) ? false : true;
};

console.log(oneAway('apple', 'abple'));          // true, replace
console.log(oneAway('apple', 'apbple'));         // true, remove/add
console.log(oneAway('pale', 'ple'));             // true, remove
console.log(oneAway('palse', 'pale'));           // true, remove/add
console.log(oneAway('alter', 'altered'));        // false
console.log(oneAway('ppppppppp', 'pppppppp'));   // true
