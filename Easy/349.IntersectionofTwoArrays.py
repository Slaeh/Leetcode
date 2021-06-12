class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        mySet = set() 
        for i in nums1: 
            mySet.add(i)
        
        mySet2 = set()
        for i in nums2:
            mySet2.add(i)
        
        return set.intersection(mySet, mySet2)