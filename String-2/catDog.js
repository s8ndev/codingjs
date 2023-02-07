/*
String-2 -- catDog
Return true if the string "cat" and "dog" appear the same number of times in the given string.

Examples

catDog('catdog') → true
catDog('catcat') → false
catDog('1cat1cadodog') → true
*/

function catDog(str) {
  let countCat = 0;
  let countDog = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 3) === "cat") countCat++;
    if (str.slice(i, i + 3) === "dog") countDog++;
  }
  return countCat === countDog;
}

console.log(catDog("catdog"));
console.log(catDog("catcat"));
console.log(catDog("1cat1cadodog"));
