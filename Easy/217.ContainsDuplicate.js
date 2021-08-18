/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i in nums) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      if (map.get(nums[i]) == 2) {
        return true;
      }
    } else {
      map.set(nums[i], 1);
    }
  }
  return false;
};
//https://leetcode.com/problems/contains-duplicate/
