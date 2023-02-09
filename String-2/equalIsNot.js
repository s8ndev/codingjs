/*
String-3 -- equalIsNot
Given a string, return true if the number of appearances of "is" anywhere in the
string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

Examples

equalIsNot('This is not') → false
equalIsNot('This is notnot') → true
equalIsNot('noisxxnotyynotxisi') → true
*/

function equalIsNot(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === "is" || str.slice(i, i + 3) === "not") count++;
  }
  return !(count % 2);
}

console.log(equalIsNot("This is not"));
console.log(equalIsNot("This is notnot"));
console.log(equalIsNot("noisxxnotyynotxisi"));
