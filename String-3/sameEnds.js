/*
String-3 -- sameEnds
Given a string,
return the longest substring that appears at both the beginning and end of the string without overlapping.
For example, sameEnds("abXab") is "ab".

Examples

sameEnds("abXYab") → "ab"
sameEnds("xx") → "x"
sameEnds("xxx") → "x"
*/

function sameEnds(str) {
  let result = "";
  for (let i = 0; i <= str.length / 2; i++) {
    if (str.slice(0, i) === str.slice(str.length - i)) result = str.slice(0, i);
  }
  return result;
}

console.log(sameEnds("abXYab"));
console.log(sameEnds("xx"));
console.log(sameEnds("xxx"));
