/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let splitter = s.split(" ");
  let res = [];
  for (let i in splitter) {
    let secondSplit = splitter[i].split("");
    let index = parseInt(secondSplit.pop());
    res[index] = secondSplit.join("");
  }
  res.shift();
  return res.join(" ");
};
//https://leetcode.com/problems/sorting-the-sentence/
