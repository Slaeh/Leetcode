/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let first = [];
  let second = [];
  while (l1) {
    first.unshift(l1.val.toString());
    l1 = l1.next;
  }
  while (l2) {
    second.unshift(l2.val.toString());
    l2 = l2.next;
  }
  let firstJoin = BigInt(first.join(""));
  let secondJoin = BigInt(second.join(""));
  let res = (firstJoin + secondJoin).toString().split("");
  let dummy = new ListNode("dum");
  let dumPointer = dummy;
  while (res.length != 0) {
    let popped = parseInt(res.pop());
    let node = new ListNode(popped, null);
    dumPointer.next = node;
    dumPointer = dumPointer.next;
  }
  return dummy.next;
};
//https://leetcode.com/problems/add-two-numbers/
