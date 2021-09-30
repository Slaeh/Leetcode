/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i];
      if (nums[i] < nums[j] && diff > max) {
        max = nums[j] - nums[i];
      }
    }
  }
  if (max == -Infinity) {
    max = -1;
  }
  return max;
};
//https://leetcode.com/problems/maximum-difference-between-increasing-elements/
