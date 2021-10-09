var MinStack = function () {
  this.arr = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);
  if (this.min.length == 0 || val <= this.min[this.min.length - 1]) {
    this.min.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let val = this.arr.pop();
  if (this.min[this.min.length - 1] == val) {
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let val = this.arr[this.arr.length - 1];
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
//https://leetcode.com/problems/min-stack/
