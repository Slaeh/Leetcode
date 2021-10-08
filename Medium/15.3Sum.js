/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let set = new Set();
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let arr = [];
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] == nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      //console.log(`${nums[i]} + ${nums[left]} + ${nums[right]} = ${sum}`)
      if (sum == 0) {
        arr.push(nums[i], nums[left], nums[right]);
        res.push(arr);
        left++;
        right++;
        while (nums[left] == nums[left - 1]) {
          left++;
        }
        while (nums[right] == nums[right + 1]) {
          right--;
        }
        arr = [];
      } else if (sum > 0) {
        right--;
      } else left++;
    }
  }
  return res;
};
//https://leetcode.com/problems/3sum/
