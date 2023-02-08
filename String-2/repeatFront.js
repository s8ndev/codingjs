/*
String-2 -- repeatFront
Given a string and an int n, return a string made of the first n characters of the string,
followed by the first n-1 characters of the string, and so on.
You may assume that n is between 0 and the length of the string,
inclusive (i.e. n >= 0 and n <= str.length()).

Examples

repeatFront('Chocolate', 4) → ChocChoChC
repeatFront('Chocolate', 3) → ChoChC
repeatFront('Ice Cream', 2) → IcI
*/

function repeatFront(str, n) {
  let newStr = "";
  for (let i = n; i > 0; i--, n--) newStr += str.slice(0, n);
  return newStr;
}

console.log(repeatFront("Chocolate", 4));
console.log(repeatFront("Chocolate", 3));
console.log(repeatFront("Ice Cream", 2));
