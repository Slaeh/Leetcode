/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let set = new Set();
  for (let i in allowed) {
    set.add(allowed[i]);
  }
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    let check = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!set.has(words[i][j])) {
        check = false;
      }
    }
    if (check == true) {
      res++;
    }
  }
  return res;
};
//https://leetcode.com/problems/count-the-number-of-consistent-strings/
