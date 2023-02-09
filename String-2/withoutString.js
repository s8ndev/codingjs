/*
String-3 -- withoutString
Given two strings, base and remove, return a version of the base string where all
instances of the remove string have been removed (not case sensitive).
You may assume that the remove string is length 1 or more. Remove only non-overlapping instances,
so with "xxx" removing "xx" leaves "x".

Examples

withoutString('Hello there', 'llo') → He there
withoutString('Hello there', 'e') → Hllo thr
withoutString('Hello there', 'x') → Hello there
*/

function withoutString(base, remove) {
  base = base.replaceAll(remove.toUpperCase(), "");
  base = base.replaceAll(remove.toLowerCase(), "");
  return base.replaceAll(remove, "");
}

console.log(withoutString("Hello there", "llo"));
console.log(withoutString("Hello there", "e"));
console.log(withoutString("Hello there", "x"));
