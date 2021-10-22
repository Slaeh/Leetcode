/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 1;
  let curr = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      curr++;
      max = Math.max(curr, max);
    } else {
      max = Math.max(curr, max);
      curr = 1;
    }
  }
  return max;
};
//https://leetcode.com/problems/consecutive-characters/
