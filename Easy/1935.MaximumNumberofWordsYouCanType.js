/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let set = new Set(brokenLetters);
  let words = text.split(" ");
  let res = 0;
  let check = false;
  for (let i in words) {
    check = false;
    for (let j in words[i]) {
      if (set.has(words[i][j])) {
        check = true;
        break;
      }
    }
    if (check == false) res++;
  }
  return res;
};
//https://leetcode.com/problems/maximum-number-of-words-you-can-type/
