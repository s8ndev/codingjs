/*
Warmup-2 -- stringX
Given a string, return a version where all the "x" have been removed.
Except an "x" at the very start or end should not be removed.

Examples

stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx
*/

function stringX(str) {
  let newStr = "";
  let len = str.length;
  if (len > 0) {
    for (let i = 1; i < len - 1; i++) {
      if (str[i] !== "x") newStr += str[i];
    }
    return str[0] + newStr + str[len - 1];
  }
  return "";
}

console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));
