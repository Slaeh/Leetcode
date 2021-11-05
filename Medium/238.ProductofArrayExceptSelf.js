/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let zeros = 0;
  let product = 1;
  for (let i in nums) {
    if (nums[i] == 0) {
      zeros++;
    } else {
      product *= nums[i];
    }
  }

  if (zeros >= 2) {
    return nums.fill(0);
  }

  let check = false;
  if (zeros === 1) {
    check = true;
  }

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (check == true) {
      if (nums[i] == 0) {
        res.push(product);
      } else res.push(0);
    } else {
      let div = product;
      div = div / nums[i];
      res.push(div);
    }
  }
  return res;
};
//https://leetcode.com/problems/product-of-array-except-self/
