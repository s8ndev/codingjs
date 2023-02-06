/*
String-1 -- startWord
Given a string and a second "word" string,
we'll say that the word matches the string if it appears at the front of the string,
except its first char does not need to match exactly. On a match, return the front of the string,
or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and
"xip" returns "hip". The word will be at least length 1.

Examples

startWord('hippo', 'hi') → hi
startWord('hippo', 'xip') → hip
startWord('hippo', 'i') → h
*/

function startWord(str, word) {
  if (str.startsWith(word)) return word;
  if (str.slice(1, word.length) === word.slice(1)) return str.slice(0, word.length);
  return "";
}

console.log(startWord("hippo", "hi"));
console.log(startWord("hippo", "xip"));
console.log(startWord("hippo", "i"));
