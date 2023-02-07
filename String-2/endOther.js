/*
String-2 -- endOther
Given two strings, return true if either of the strings appears at the very end of the other string,
ignoring upper/lower case differences (in other words, the computation should not be "case sensitive").
Note: str.toLowerCase() returns the lowercase version of a string.

Examples

endOther('Hiabc', 'abc') → true
endOther('AbC', 'HiaBc') → true
endOther('abc', 'abXabc') → true
*/

function endOther(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a.length > b.length ? a.endsWith(b) : b.endsWith(a);
}

console.log(endOther("Hiabc", "abc"));
console.log(endOther("AbC", "HiaBc"));
console.log(endOther("abc", "abXabc"));
