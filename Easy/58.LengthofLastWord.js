/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let split = s.trim().split(" ");
  return split[split.length - 1].length;
};
//https://leetcode.com/problems/length-of-last-word/
