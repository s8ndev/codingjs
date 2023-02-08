/*
String-2 -- mixString
Given two strings, a and b, create a bigger string made of the first char of a,
the first char of b, the second char of a, the second char of b, and so on.
Any leftover chars go at the end of the result.

Examples

mixString('abc', 'xyz') → axbycz
mixString('Hi', 'There') → HTihere
mixString('xxxx', 'There') → xTxhxexre
*/

function mixString(a, b) {
  let result = "";
  let i = 0;
  while (i < a.length && i < b.length) {
    result += a[i] + b[i];
    i++;
  }
  return result + a.slice(i) + b.slice(i);
}

console.log(mixString("abc", "xyz"));
console.log(mixString("Hi", "There"));
console.log(mixString("xxxx", "There"));
