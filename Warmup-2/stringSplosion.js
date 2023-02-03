/*
Warmup-2 -- stringSplosion
Given a non-empty string like "Code" return a string like "CCoCodCode".

Examples

stringSplosion('Code') → CCoCodCode
stringSplosion('abc') → aababc
stringSplosion('ab') → aab
*/

function stringSplosion(str) {
  let newStr = "";
  for (let i = 0; i <= str.length; i++) {
    newStr += str.slice(0, i);
  }
  return newStr;
}

console.log(stringSplosion("Code"));
console.log(stringSplosion("abc"));
console.log(stringSplosion("ab"));
