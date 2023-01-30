/*
Warmup-1 -- notString
Given a string, return a new string where "not " has been added to the front.
However, if the string already begins with "not", return the string unchanged.

Examples

notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad
*/

function notString(str) {
  return str.substring(0, 3) === "not" ? str : `not ${str}`;
}

console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
