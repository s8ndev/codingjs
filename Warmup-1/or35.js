/*
Warmup-1 -- or35
Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

Examples

or35(3) → true
or35(10) → true
or35(8) → false
*/

function or35(n) {
  return !(n % 3) || !(n % 5);
}

console.log(or35(3));
console.log(or35(10));
console.log(or35(8));
