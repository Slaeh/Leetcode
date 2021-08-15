/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = new Map();
  for (let i in s) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let equalVal = map.get(s[0]);
  for (let [k, v] of map.entries()) {
    if (v != equalVal) {
      return false;
    }
  }
  return true;
};
//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
