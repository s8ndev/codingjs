/*
Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false
*/

function stringE(str) {
  let count = 0;
  for (let i of str) if (i === "e") count++;
  return count <= 3 && count > 0;
}

console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));
