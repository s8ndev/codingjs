/*
String-1 -- seeColor
Given a string, if the string begins with "red" or "blue" return that color string,
otherwise return the empty string.

Examples

seeColor('redxx') → red
seeColor('xxred') →
seeColor('blueTimes') → blue
*/

function seeColor(str) {
  return str.startsWith("red") ? "red" : str.startsWith("blue") ? "blue" : "";
}

console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));
