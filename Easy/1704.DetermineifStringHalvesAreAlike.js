/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let set = new Set([...vowels]);
  let first = 0;
  let second = 0;
  s = s.toLowerCase();
  let half = s.length / 2;
  for (let i = 0; i < half; i++) {
    if (set.has(s[i])) {
      first++;
    }
  }
  for (let i = half; i < s.length; i++) {
    if (set.has(s[i])) {
      second++;
    }
  }
  return first === second;
};
//https://leetcode.com/problems/determine-if-string-halves-are-alike/
