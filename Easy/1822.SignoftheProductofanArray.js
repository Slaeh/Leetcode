/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let product = 1;
  for (let i in nums) {
    product *= nums[i];
  }
  if (product > 1) {
    return 1;
  } else if (product < 0) {
    return -1;
  }
  return 0;
};
//https://leetcode.com/problems/sign-of-the-product-of-an-array/
