/*
String-2 -- oneTwo
Given a string, compute a new string by moving the first char to come after the next two chars,
so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd".
Ignore any group of fewer than 3 chars at the end.

Examples

oneTwo('abc') → bca
oneTwo('tca') → cat
oneTwo('tcagdo') → catdog
*/

function oneTwo(str) {
  let newStr = "";
  for (let i = 0; i < str.length - 2; i += 3) {
    newStr += str.slice(i+1, i + 3) + str[i];
  }
  return newStr;
}

console.log(oneTwo("abc"));
console.log(oneTwo("tca"));
console.log(oneTwo("tcagdo"));
