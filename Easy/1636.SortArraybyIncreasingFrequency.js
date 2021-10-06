/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map();
  for (let i in nums) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
  return nums;
};
//https://leetcode.com/problems/sort-array-by-increasing-frequency/
