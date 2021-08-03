/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let res = 0;
  for (let i in startTime) {
    let first = startTime[i];
    let second = endTime[i];
    if (first <= queryTime && second >= queryTime) {
      res++;
    }
  }
  return res;
};
//https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
