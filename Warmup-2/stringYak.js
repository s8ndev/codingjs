/*
Warmup-2 -- stringYak
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed,
but the "a" can be any char. The "yak" strings will not overlap.

Examples

stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya
*/

function stringYak(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "y" && str[i + 2] === "k") i += 2;
    else newStr += str[i];
  }
  return newStr;
}

console.log(stringYak("yakpak"));
console.log(stringYak("pakyak"));
console.log(stringYak("yak123ya"));
