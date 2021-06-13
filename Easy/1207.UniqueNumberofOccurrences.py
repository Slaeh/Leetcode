class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        myMap = {}
        for i in arr: 
            if i in myMap: 
                myMap.update({i: myMap.get(i) + 1})
            else: 
                myMap.update({i: 1})
        
        mySet = set()
        for i in myMap.values():
            if i in mySet:
                return False
            else: 
                mySet.add(i)
        
        return True

#https://leetcode.com/problems/unique-number-of-occurrences/