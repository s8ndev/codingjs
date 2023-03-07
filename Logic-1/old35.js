/*
Logic-1 -- old35
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

Examples

old35(3) → true
old35(10) → true
old35(15) → false
*/

function old35(n) {
  return !(n % 3) !== !(n % 5);
}

console.log(old35(3));
console.log(old35(10));
console.log(old35(15));
