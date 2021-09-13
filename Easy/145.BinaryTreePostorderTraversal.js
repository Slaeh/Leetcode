/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let arr = [];
  if (root) {
    dfs(root, arr);
  }
  return arr;
};

function dfs(root, arr) {
  if (root == null) {
    return;
  }
  dfs(root.left, arr);
  dfs(root.right, arr);
  arr.push(root.val);
}
//https://leetcode.com/problems/binary-tree-postorder-traversal/
