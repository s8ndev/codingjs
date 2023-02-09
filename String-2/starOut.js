/*
String-2 -- starOut
Return a version of the given string,
where for every star (*) in the string the star and the chars immediately to its left and right are gone.
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples

starOut('ab*cd') → ad
starOut('ab**cd') → ad
starOut('sm*eilly') → silly
*/

function starOut(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*" || (i > 0 && str[i - 1] === "*")) continue;
    if (i < str.length - 1 && str[i + 1] === "*") continue;
    newStr += str[i];
  }
  return newStr;
}

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("sm*eilly"));
