/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  let res = [];
  for (let i = 0; i < rectangles.length; i++) {
    res.push(rectangles[i][1] / rectangles[i][0]);
  }
  let count = 0;
  let map = new Map();
  for (let i in res) {
    if (map.has(res[i])) {
      map.set(res[i], map.get(res[i]) + 1);
    } else {
      map.set(res[i], 1);
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (map.get(res[i]) != 1) {
      map.set(res[i], map.get(res[i]) - 1);
      count += map.get(res[i]);
    }
  }
  return count;
};
//https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
