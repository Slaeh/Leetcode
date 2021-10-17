/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let map = new Map();
  for (let i in arr) {
    map.set(arr[i], i);
  }
  let first = "";
  let second = "";
  let third = "";
  for (let i in firstWord) {
    first += map.get(firstWord[i]);
  }
  for (let i in secondWord) {
    second += map.get(secondWord[i]);
  }
  for (let i in targetWord) {
    third += map.get(targetWord[i]);
  }
  return parseInt(first) + parseInt(second) === parseInt(third);
};
//https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
