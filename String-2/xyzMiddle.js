/*
String-2 -- xyzMiddle
Given a string, does "xyz" appear in the middle of the string? To define middle,
we'll say that the number of chars to the left and right of the "xyz" must differ by at most one.
This problem is harder than it looks.

Examples

xyzMiddle('AAxyzBB') → true
xyzMiddle('AxyzBB') → true
xyzMiddle('AxyzBBB') → false
*/

function xyzMiddle(str) {
  while (str.length > 4) str = str.slice(1, str.length - 1);
  return str.includes("xyz");
}

console.log(xyzMiddle("AAxyzBB"));
console.log(xyzMiddle("AxyzBB"));
console.log(xyzMiddle("AxyzBBB"));
