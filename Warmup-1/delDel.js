/*
Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1,
return a string where that "del" has been deleted.
Otherwise, return the string unchanged.

Examples

delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel
*/

function delDel(str) {
  return str.slice(1, 4) !== "del" ? str : str.replace("del", "");
}

console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("abcdel"));
