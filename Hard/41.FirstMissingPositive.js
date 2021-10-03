/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  while (nums[0] <= 0) {
    nums.shift();
  }
  if (nums.length == 0) return 1;
  let set = new Set();
  let count = 1;
  for (let i in nums) {
    if (!set.has(nums[i])) {
      if (nums[i] != count) {
        return count;
      } else {
        set.add(nums[i]);
        count++;
      }
    }
  }
  return nums[nums.length - 1] + 1;
};
//https://leetcode.com/problems/first-missing-positive/
