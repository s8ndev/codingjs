/*
Warmup-2 -- altPairs
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples

altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr
*/

function altPairs(str) {
  let result = "";
  let len = str.length;
  for (let i = 0; i < len; i += 4) {
    let end = i + 2;
    if (end > len) end = len;
    result += str.slice(i, end);
  }
  return result;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
