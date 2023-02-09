/*
String-3 -- mirrorEnds
Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string.
In other words, zero or more characters at the very begining of the given string,
and at the very end of the string in reverse order (possibly overlapping). For example,
the string "abXYZba" has the mirror end "ab".

Examples

mirrorEnds('abXYZba') → ab
mirrorEnds('abca') → a
mirrorEnds('aba') → aba
*/

function mirrorEnds(s) {
  let i = -1;
  while (++i < s.length && s[i] === s[s.length - i - 1]);
  return s.slice(0, i);
}

console.log(mirrorEnds("abXYZba"));
console.log(mirrorEnds("abca"));
console.log(mirrorEnds("aba"));
