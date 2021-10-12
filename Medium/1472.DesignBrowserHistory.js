/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.curr = [homepage];
  this.ahead = [];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.curr.push(url);
  this.ahead = [];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let copy = steps;
  while (copy > 0) {
    if (this.curr.length == 1) {
      break;
    } else {
      this.ahead.unshift(this.curr.pop());
      copy--;
    }
  }
  return this.curr[this.curr.length - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let copy = steps;
  while (copy > 0) {
    if (this.ahead.length == 0) {
      break;
    }
    this.curr.push(this.ahead.shift());
    copy--;
  }
  return this.curr[this.curr.length - 1];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
//https://leetcode.com/problems/design-browser-history/
