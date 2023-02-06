/*
String-1 -- frontAgain
Given a string, return true if the first 2 chars in the string also appear at the end of the string,
such as with "edited".

Examples

frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true
*/

function frontAgain(str) {
  return str.length > 1 ? str.slice(0, 2) === str.slice(-2) : false;
}

console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));
