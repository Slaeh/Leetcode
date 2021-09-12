/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (word.indexOf(ch) == -1) {
    return word;
  }
  let arr = word.split("");
  let res = [];
  let pos = 0;
  while (arr[pos] != ch) {
    pos++;
  }
  let slice = word
    .slice(0, pos + 1)
    .split("")
    .reverse();
  for (let i = 0; i < slice.length; i++) {
    arr[i] = slice[i];
  }
  return arr.join("");
};
//https://leetcode.com/problems/reverse-prefix-of-word/
