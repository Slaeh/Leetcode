/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let stack = [];
  let res = 0;
  for (let i in s) {
    if (s[i] === "(") {
      stack.push("(");
    } else if (s[i] === ")") {
      let popped = stack.pop();
      if (popped !== "(") {
        res++;
      }
    }
  }
  res += stack.length;
  return res;
};
//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
