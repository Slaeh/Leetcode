/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode last = null;
        ListNode current = head;
        while(current != null){
            ListNode newCurrent = current.next;
            current.next = last;
            last = current;
            current = newCurrent;
        }
        return last;
    }
}
//https://leetcode.com/problems/reverse-linked-list/
