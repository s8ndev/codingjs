/*
String-1 -- conCat
Given two strings, append them together (known as "concatenation") and return the result.
However, if the concatenation creates a double-char, then omit one of the chars,
so "abc" and "cat" yields "abcat".

Examples

conCat('abc', 'cat') → abcat
conCat('dog', 'cat') → dogcat
conCat('abc', '') → abc
*/

function conCat(a, b) {
  return a[a.length - 1] === b[0] ? a + b.slice(1) : a + b;
}

console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));
