/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i in nums) {
    nums[i] = Math.pow(nums[i], 2);
  }
  nums.sort((a, b) => a - b);
  return nums;
};
//https://leetcode.com/problems/squares-of-a-sorted-array/
