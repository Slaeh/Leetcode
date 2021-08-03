/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let arr = [];
  for (let i in nums) {
    arr[i] = nums[nums[i]];
  }
  return arr;
};
//https://leetcode.com/problems/build-array-from-permutation/
