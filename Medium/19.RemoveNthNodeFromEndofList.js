/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0;
  let pointer = head;
  while (pointer) {
    len++;
    pointer = pointer.next;
  }
  let spot = len - n;
  let dummy = new ListNode("dum", head);
  let dumPointer = dummy;
  let newPointer = head;
  let count = 0;
  while (newPointer && count != spot) {
    newPointer = newPointer.next;
    dumPointer = dumPointer.next;
    count++;
  }
  let nextNode = newPointer.next;
  dumPointer.next = nextNode;
  return dummy.next;
};
//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
