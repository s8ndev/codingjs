/*
String-1 -- twoChar
Given a string and an index, return a string length 2 starting at the given index.
If the index is too big or too small to define a string length 2, use the first 2 chars.
The string length will be at least 2.

Examples

twoChar('java', 0) → ja
twoChar('java', 2) → va
twoChar('java', 3) → ja
*/

function twoChar(str, index) {
  return index + 2 > str.length || index < 0 ? str.slice(0, 2) : str.slice(index, index + 2);
}

console.log(twoChar("java", 0));
console.log(twoChar("java", 2));
console.log(twoChar("java", 3));
