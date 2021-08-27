/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
};

//https://leetcode.com/problems/peak-index-in-a-mountain-array/
