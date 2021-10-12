/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let combined = nums1.concat(nums2);
  combined.sort((a, b) => a - b);
  if (combined.length % 2 == 1) {
    return combined[Math.floor(combined.length / 2)];
  } else {
    let first = combined[Math.floor(combined.length / 2) - 1];
    let second = combined[Math.floor(combined.length / 2)];
    let res = (first + second) / 2;
    return res;
  }
};
//https://leetcode.com/problems/median-of-two-sorted-arrays/
