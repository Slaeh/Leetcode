/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let arr = [];
  let num = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      num += s[i];
    } else if (num.length > 0) {
      arr.push(parseInt(num));
      num = "";
    }
  }
  if (num.length > 0) {
    arr.push(parseInt(num));
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= max) {
      return false;
    }
    max = arr[i];
  }
  return true;
};
//https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
