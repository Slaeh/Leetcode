/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let sol = nums.length / 2;
  for (let i in nums) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [k, v] of map.entries()) {
    if (v > sol) {
      return k;
    }
  }
};
//https://leetcode.com/problems/majority-element/
