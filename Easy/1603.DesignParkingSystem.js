/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.bg = big;
  this.md = medium;
  this.sm = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType == 1) {
    if (this.bg == 0) {
      return false;
    } else {
      this.bg--;
      return true;
    }
  } else if (carType == 2) {
    if (this.md == 0) {
      return false;
    } else {
      this.md--;
      return true;
    }
  } else if (carType == 3) {
    if (this.sm == 0) {
      return false;
    } else {
      this.sm--;
      return true;
    }
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
//https://leetcode.com/problems/design-parking-system/
