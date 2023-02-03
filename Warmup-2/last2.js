/*
Warmup-2 -- last2
Given a string, return the count of the number of times that a substring length 2 appears
in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

Examples

last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1
*/

function last2(str) {
  let len = str.length;
  let lastTwo = str.slice(len - 2, len);
  let count = 0;
  if (len < 2) return count;
  for (let i = 0; i < len - 2; i++) {
    if (str.slice(i, i + 2) === lastTwo) count++;
  }
  return count;
}

console.log(last2("hixxhi"));
console.log(last2("xaxxaxaxx"));
console.log(last2("axxaaxx"));
