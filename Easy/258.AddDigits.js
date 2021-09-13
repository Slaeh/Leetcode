/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num <= 9) {
    return num;
  } else if (num % 9 === 0) {
    return 9;
  }
  return num % 9;
};
//https://leetcode.com/problems/add-digits/
