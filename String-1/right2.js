/*
String-1 -- right2
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start.
The string length will be at least 2.

Examples

right2('Hello') → loHel
right2('java') → vaja
right2('Hi') → Hi
*/

function right2(str) {
  return str.slice(-2) + str.slice(0, -2);
}

console.log(right2("Hello"));
console.log(right2("java"));
console.log(right2("Hi"));
