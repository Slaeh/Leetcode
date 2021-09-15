/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let arr = [];
  if (root1) {
    dfs(root1, arr);
  }
  if (root2) {
    dfs(root2, arr);
  }
  arr.sort((a, b) => a - b);
  return arr;
};

function dfs(root, arr) {
  if (root == null) {
    return;
  }
  dfs(root.left, arr);
  arr.push(root.val);
  dfs(root.right, arr);
}
//https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
