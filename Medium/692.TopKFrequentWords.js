/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  words.sort((b, a) => b - a);
  let map = new Map();
  for (let i in words) {
    map.set(words[i], map.get(words[i]) + 1 || 1);
  }
  words.sort((a, b) => map.get(b) - map.get(a) || a.localeCompare(b));
  let res = [];
  for (let i in words) {
    if (map.get(words[i]) && k != 0) {
      res.push(words[i]);
      map.delete(words[i]);
      k--;
    }
  }
  return res;
};
//https://leetcode.com/problems/top-k-frequent-words/
