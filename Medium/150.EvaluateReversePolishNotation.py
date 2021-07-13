class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for token in tokens: 
            if token == '+': 
                second = int(stack.pop())
                first = int(stack.pop())
                stack.append(second + first)
            elif token == '-': 
                second = int(stack.pop())
                first = int(stack.pop())
                stack.append(first - second)
            elif token == '*': 
                second = int(stack.pop())
                first = int(stack.pop())
                stack.append(first * second)
            elif token == '/': 
                second = int(stack.pop())
                first = int(stack.pop()) 
                res = math.trunc(first / second)
                stack.append(res)
            else: 
                stack.append(int(token))
    
        return stack.pop()

#https://leetcode.com/problems/evaluate-reverse-polish-notation/