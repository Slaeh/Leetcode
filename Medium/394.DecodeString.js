/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let nums = [];
  let currStr = [];
  let currNum = "";
  for (let i in s) {
    if (s[i] == "[") {
      nums.push(parseInt(currNum));
      currNum = "";
      currStr.push("[");
    } else if (s[i] == "]") {
      let str = [];
      while (currStr[currStr.length - 1] !== "[") {
        str.unshift(currStr.pop());
      }
      currStr.pop();
      str = str.join("");
      currStr.push(str.repeat(nums.pop()).split(""));
      currStr = currStr.flat();
    } else {
      if (!isNaN(s[i])) {
        currNum += s[i];
      } else {
        currStr.push(s[i]);
      }
    }
  }
  return currStr.join("").toString();
};
//https://leetcode.com/problems/decode-string/
