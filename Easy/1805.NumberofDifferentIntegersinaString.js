/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let set = new Set();
  let curr = "";
  for (let i = 0; i < word.length; i++) {
    if (!isNaN(word[i])) {
      curr += word[i];
    } else if (curr.length > 0) {
      set.add(BigInt(curr));
      curr = "";
    }
  }
  if (curr != "") {
    set.add(BigInt(curr));
  }
  return set.size;
};
//https://leetcode.com/problems/number-of-different-integers-in-a-string/
