/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  for (let i in arr) {
    if (map.has(arr[i] * 2) && map.get(arr[i] * 2) != i) {
      return true;
    }
  }
  return false;
};
//https://leetcode.com/problems/check-if-n-and-its-double-exist/
