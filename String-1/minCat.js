/*
String-1 -- minCat
Given two strings, append them together (known as "concatenation") and return the result.
However, if the strings are different lengths, 
omit chars from the longer string so it is the same length as the shorter string.
So "Hello" and "Hi" yield "loHi". The strings may be any length.

Examples

minCat('Hello', 'Hi') → loHi
minCat('Hello', 'java') → ellojava
minCat('java', 'Hello') → javaello
*/

function minCat(a, b) {
  if (a === "" || b === "") return "";
  return a.length > b.length ? a.slice(-b.length) + b : a + b.slice(-a.length);
}

console.log(minCat("Hello", "Hi"));
console.log(minCat("Hello", "java"));
console.log(minCat("java", "Hello"));
