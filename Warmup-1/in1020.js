/*
Warmup-1 -- in1020
Given 2 int values, return true if either of them is in the range 10..20 inclusive.

Examples

in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
*/

function in1020(a, b) {
  return (a > 9 && a < 21) || (b > 9 && b < 21);
}

console.log(in1020(12, 99));
console.log(in1020(21, 12));
console.log(in1020(8, 99));
