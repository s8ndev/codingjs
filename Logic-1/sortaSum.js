/*
Logic-1 -- sortaSum
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

Examples

sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21
*/

function sortaSum(a, b) {
  return a + b > 9 && a + b < 19 ? 20 : a + b;
}

console.log(sortaSum(3, 4));
console.log(sortaSum(9, 4));
console.log(sortaSum(10, 11));
