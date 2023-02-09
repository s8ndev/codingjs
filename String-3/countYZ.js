/*
String-3 -- countYZ
Given a string,
count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count,
but not the 'y' in "yellow" (not case sensitive).
We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it.
(Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

Examples

countYZ('fez day') → 2
countYZ('day fez') → 2
countYZ('day fyyyz') → 2
*/

function countYZ(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/^[a-za-z]+$/)) {
      if (str[i - 1] === "y" || str[i - 1] === "z") count++;
    } else if (i === str.length - 1) {
      if (str[i] === "y" || str[i] === "z") count++;
    }
  }
  return count;
}

console.log(countYZ("fez day"));
console.log(countYZ("day fez"));
console.log(countYZ("day fyyyz"));
