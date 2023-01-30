/*
Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21,
except return double the absolute difference if n is over 21.

Examples

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*/

function diff21(n) {
  return n > 21 ? (n - 21) * 2 : 21 - n;
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
