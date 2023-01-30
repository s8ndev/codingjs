/*
Warmup-1 -- startHi
Given a string, return true if the string starts with 'hi'and false otherwise.

Examples

startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false
*/

function startHi(str) {
  return str.slice(0, 2) === "hi";
}

console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));
