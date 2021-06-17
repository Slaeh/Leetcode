# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if not head: 
            return True
        stack = []
        pointer = head
        while pointer: 
            stack.append(pointer.val)
            pointer = pointer.next
        
        return stack == stack[::-1]

#https://leetcode.com/problems/palindrome-linked-list/