/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let first = "0b" + a;
  let second = "0b" + b;
  let sum = BigInt(first) + BigInt(second);
  return sum.toString(2);
};
//https://leetcode.com/problems/add-binary/
