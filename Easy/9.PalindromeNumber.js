/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let parsed = x.toString();
  return parsed === parsed.split("").reverse().join("");
};
//https://leetcode.com/problems/palindrome-number/
