/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = (x ^ y).toString(2);
  let res = 0;
  for (let i in xor) {
    if (xor[i] == "1") res++;
  }
  return res;
};
//https://leetcode.com/problems/hamming-distance/
