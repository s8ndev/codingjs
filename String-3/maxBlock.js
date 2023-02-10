/*
String-3 -- maxBlock
Given a string, return the length of the largest "block" in the string.
A block is a run of adjacent chars that are the same.

Examples

maxBlock('hoopla') → 2
maxBlock('abbCCCddBBBxx') → 3
maxBlock('') → 0
*/

function maxBlock(str) {
  let count = 0;
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && str[i] === str[i + 1]) temp++;
    else temp = 1;
    if (temp > count) count = temp;
  }
  return count;
}

console.log(maxBlock("hoopla"));
console.log(maxBlock("abbCCCddBBBxx"));
console.log(maxBlock(""));
