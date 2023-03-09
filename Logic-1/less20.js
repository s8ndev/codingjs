/*
Logic-1 -- less20
Return true if the given non-negative number is 1 or 2 less than a multiple of 20.
So for example 38 and 39 return true, but 40 returns false.

Examples

less20(18) → true
less20(19) → true
less20(20) → false
*/

function less20(n) {
  return !((n + 1) % 20) || !((n + 2) % 20);
}

console.log(18);
console.log(19);
console.log(20);
