/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let arr = [];
  let pointer = head;
  while (pointer) {
    arr.push(pointer.val);
    pointer = pointer.next;
  }
  arr.sort((a, b) => a - b);
  let secondPointer = head;
  while (secondPointer) {
    secondPointer.val = arr.shift();
    secondPointer = secondPointer.next;
  }
  return head;
};
//https://leetcode.com/problems/sort-list/
