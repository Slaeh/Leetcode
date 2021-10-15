/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absense = 0;
  let late = 0;
  let curr = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "A") {
      absense++;
      curr = 0;
    } else if (s[i] == "L") {
      curr++;
    } else {
      curr = 0;
    }
    late = Math.max(curr, late);
  }
  if (absense >= 2 || late >= 3) return false;
  return true;
};
//https://leetcode.com/problems/student-attendance-record-i/
