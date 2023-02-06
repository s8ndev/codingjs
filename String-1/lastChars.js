/*
String-1 -- lastChars
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b,
so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

Examples

lastChars('last', 'chars') → ls
lastChars('yo', 'java') → ya
lastChars('hi', '') → h@
*/

function lastChars(a, b) {
  let first = "@";
  let last = "@";
  if (a.length > 0) first = a[0];
  if (b.length > 0) last = b[b.length - 1];
  return first + last;
}

console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));
