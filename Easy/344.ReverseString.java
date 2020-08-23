class Solution {
    public void reverseString(char[] s) {
        int counter = 0;
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < s.length; i++){
            stack.push(s[i]);
        }
        while(!stack.isEmpty()){
            char letter = stack.pop();
            s[counter] = letter;
            counter++;
        }
    }
}
