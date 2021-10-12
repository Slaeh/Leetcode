var RandomizedSet = function () {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) {
    return false;
  }
  this.set.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let arr = [...this.set];
  if (arr.length == 0) {
    return arr[0];
  }
  let rand = Math.ceil(Math.random() * this.set.size - 1);
  return arr[rand];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
//https://leetcode.com/problems/insert-delete-getrandom-o1/
