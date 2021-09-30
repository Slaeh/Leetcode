/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      intervals[i] = [
        intervals[i - 1][0],
        Math.max(intervals[i][1], intervals[i - 1][1]),
      ];
      intervals.splice(i - 1, 1);
      i--;
    }
  }
  return intervals;
};
//https://leetcode.com/problems/merge-intervals/
