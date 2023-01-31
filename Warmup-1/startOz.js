/*
Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars (if present),
however include first char only if it is 'o' and include the second only if it is 'z',
so 'ozymandias' yields 'oz'.

Examples

startOz('ozymandias') → oz
startOz('bzoo') → z
startOz('oxx') → o
*/

// function startOz(str) {
//   if (str.slice(0, 2) === "oz") return "oz";
//   else if (str[0] === "o" || str[1] === "o") return "o";
//   else if (str[0] === "z" || str[1] === "z") return "z";
//   return str;
// }

function startOz(str) {
  let result = "";
  if (str[0] === "o") result += str[0];
  if (str[1] === "z") result += str[1];
  return result;
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));
