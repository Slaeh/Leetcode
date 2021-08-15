/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let val = [];
  let occur = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 1) {
      val.push(nums[i]);
    } else {
      occur.push(nums[i]);
    }
  }
  let res = [];
  for (let i = 0; i < val.length; i++) {
    while (occur[i] != 0) {
      res.push(val[i]);
      occur[i] -= 1;
    }
  }
  return res;
};
//https://leetcode.com/problems/decompress-run-length-encoded-list/
