/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums) {
    return 0;
  } else if (nums.length == 1) {
    return nums[0];
  } else if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }
  let max = -Infinity;
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    max = Math.max(nums[i] + first, second);
    first = second;
    second = max;
  }
  return max;
};
//https://leetcode.com/problems/house-robber/
