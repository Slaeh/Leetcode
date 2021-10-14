/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let map = new Map();
  for (let i in nums) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  for (let i in nums) {
    let curr = nums[i];
    curr--;
    let res = 0;
    while (curr >= 0) {
      if (map.has(curr)) {
        res += map.get(curr);
      }
      curr--;
    }
    nums[i] = res;
  }
  return nums;
};
//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
