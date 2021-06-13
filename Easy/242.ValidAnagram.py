class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dict = {} 
        for i in s:
            if i in dict:
                dict.update({i: dict.get(i) + 1})
            else:
                dict.update({i: 1})
        
        for i in t:
            if i not in dict:
                return False
            else: 
                dict.update({i: dict.get(i) - 1})
                if dict.get(i) == 0:
                    dict.pop(i)
        if len(dict) > 0:
            return False
        
        return True
#https://leetcode.com/problems/valid-anagram/