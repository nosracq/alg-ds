/*
  Cracking the Coding Interview 1.3
  
  Replaces spaces in a string with '%20'
*/

/*
  input: string, true length of string (doesnt include trailing spaces)
*/

function URLify(str, tLen) {


  var regex = /\s/gi;

  // remove trailing spaces
  str = str.slice(0, tLen);
  // replace spaces
  str = str.replace(regex, '%20');

  /* without using String.replace()
  for (var i = 0, n = str.length; i < n; i++) {
    if (str[i] == ' ') str[i] = '%20';
  }*/
  // remove whitspace in front
  /*
  var regex = /\w/gi;
  var arr = regex.exec(str);
  console.log(arr.index);*/

  console.log(str);
}

URLify('my blue bird     ', 12);
URLify('3434  ', 5);
URLify('blank', 5);
//URLify('    blob',4 );
