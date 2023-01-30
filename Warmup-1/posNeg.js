/*
Warmup-1 -- posNeg
Given 2 int values, return true if one is negative and one is positive.
Except if the parameter "negative" is true, then return true only if both are negative.

Examples

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/

function posNeg(a, b, negative) {
  if (negative) return a < 0 && b < 0;
  return (a < 0 && b >= 0) || (a >= 0 && b < 0);
}

console.log(posNeg(1, -1, false));
console.log(posNeg(-1, 1, false));
console.log(posNeg(-4, -5, true));
