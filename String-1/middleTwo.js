/*
String-1 -- middleTwo
Given a string of even length, return a string made of the middle two chars,
so the string "string" yields "ri". The string length will be at least 2.

Examples

middleTwo('string') → ri
middleTwo('code') → od
middleTwo('Practice') → ct
*/

function middleTwo(str) {
  return str.slice(str.length / 2 - 1, str.length / 2 + 1);
}

console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("Practice"));
