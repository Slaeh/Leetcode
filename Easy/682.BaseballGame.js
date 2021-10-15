/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [];
  for (let i in ops) {
    if (ops[i] == "D") {
      let num = stack[stack.length - 1];
      stack.push(num * 2);
    } else if (ops[i] == "+") {
      let first = stack[stack.length - 1];
      let second = stack[stack.length - 2];
      stack.push(first + second);
    } else if (ops[i] == "C") {
      stack.pop();
    } else {
      stack.push(parseInt(ops[i]));
    }
  }
  let res = 0;
  for (let i in stack) {
    res += stack[i];
  }
  return res;
};
//https://leetcode.com/problems/baseball-game/
