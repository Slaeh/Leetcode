/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();
  for (let i in arr) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  let lucky = -1;
  for (let [k, v] of map.entries()) {
    if (k == v && k > lucky) {
      lucky = k;
    }
  }
  return lucky;
};
//https://leetcode.com/problems/find-lucky-integer-in-an-array/
