/*
String-1 -- atFirst
Given a string, return a string length 2 made of its first 2 chars.
If the string length is less than 2, use '@' for the missing chars.

Examples

atFirst('hello') → he
atFirst('hi') → hi
atFirst('h') → h@
*/

function atFirst(str) {
  return str.length > 1 ? str.slice(0, 2) : str === "" ? "@@" : str + "@";
}

console.log(atFirst("hello"));
console.log(atFirst("hi"));
console.log(atFirst("h"));
