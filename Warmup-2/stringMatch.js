/*
Warmup-2 -- stringMatch
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring.
So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", 
and "az" substrings appear in the same place in both strings.

Examples

stringMatch('xxcaazz', 'xxbaaz') → 3
stringMatch('abc', 'abc') → 2
stringMatch('abc', 'axc') → 0
*/

function stringMatch(a, b) {
  let len = Math.min(a.length, b.length) - 1;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (a.slice(i, i + 2) === b.slice(i, i + 2)) count++;
  }
  return count;
}

console.log(stringMatch("xxcaazz", "xxbaaz"));
console.log(stringMatch("abc", "abc"));
console.log(stringMatch("abc", "axc"));
