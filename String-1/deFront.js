/*
String-1 -- deFront
Given a string, return a version without the first 2 chars.
Except keep the first char if it is 'a' and keep the second char if it is 'b'.
The string may be any length. Harder than it looks.

Examples

deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay
*/

function deFront(str) {
  if (str.slice(0, 2) === "ab") return str;
  if (str[0] === "a") return str[0] + str.slice(2);
  if (str[1] === "b") return str.slice(1);
  return str.slice(2);
}

console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));
