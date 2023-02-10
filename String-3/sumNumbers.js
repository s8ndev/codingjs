/*
String-3 -- sumNumbers
Given a string, return the sum of the numbers appearing in the string,
ignoring all other characters. A number is a series of 1 or more digit chars in a row.
(Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'.
Integer.parseInt(string) converts a string to an int.)

Examples

sumNumbers('abc123xyz') → 123
sumNumbers('aa11b33') → 44
sumNumbers('7 11') → 18
*/

function sumNumbers(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let collector = "";
    let num = parseInt(str[i]);
    let idx = i;
    let advance = 0;
    while (Number.isInteger(num)) {
      collector += str[idx];
      num = parseInt(str[idx + 1]);
      if (Number.isInteger(num)) {
        idx += 1;
        advance += 1;
      }
    }
    if (collector.length) {
      let fullNum = parseInt(collector);
      sum += fullNum;
      i += advance;
    }
  }
  return sum;
}

console.log(sumNumbers("abc123xyz"));
console.log(sumNumbers("aa11b33"));
console.log(sumNumbers("7 11"));
