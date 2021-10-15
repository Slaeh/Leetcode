/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 1) {
      let num = parseInt(str[i]);
      let letter = str[i - 1];
      let res = String.fromCharCode(letter.charCodeAt(0) + num);
      str[i] = res;
    }
  }
  return str.join("");
};
//https://leetcode.com/problems/replace-all-digits-with-characters/
