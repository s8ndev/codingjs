/*
Warmup-1 -- close10
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
Note that Math.abs(n) returns the absolute value of a number.

Examples

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

function close10(a, b) {
  let num1 = 10 <= a ? a - 10 : 10 - a;
  let num2 = 10 <= b ? b - 10 : 10 - b;
  if (num1 === num2) return 0;
  return num1 > num2 ? b : a;
}

console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));
