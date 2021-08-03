/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let i in magazine) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1);
    } else {
      map.set(magazine[i], 1);
    }
  }
  for (let i in ransomNote) {
    if (map.has(ransomNote[i])) {
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
      if (map.get(ransomNote[i]) === 0) {
        map.delete(ransomNote[i]);
      }
    } else {
      return false;
    }
  }
  if (map.length > 0) {
    return false;
  }
  return true;
};
//https://leetcode.com/problems/ransom-note/
