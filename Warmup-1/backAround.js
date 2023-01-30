/*
Warmup-1 -- backAround
Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.

Examples

backAround('cat') → tcatt
backAround('Hello') → oHelloo
backAround('a') → aaa
*/

function backAround(str) {
  return str[str.length - 1] + str + str[str.length - 1];
}

console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));
