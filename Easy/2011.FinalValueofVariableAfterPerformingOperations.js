/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let res = 0;
  for (let i in operations) {
    if (operations[i].includes("-")) {
      res--;
    } else {
      res++;
    }
  }
  return res;
};
//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
