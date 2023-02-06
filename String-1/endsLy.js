/*
String-1 -- endsLy
Given a string, return true if it ends in "ly".

Examples

endsLy('oddly') → true
endsLy('y') → false
endsLy('oddl') → false
*/

function endsLy(str) {
  return str.slice(str.length - 2) === "ly";
}

console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddl"));
