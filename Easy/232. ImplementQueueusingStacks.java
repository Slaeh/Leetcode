class MyQueue {
      private Stack<Integer> mainStack; 
      private Stack<Integer> helper; 
    /** Initialize your data structure here. */
    public MyQueue() {
        this.mainStack = new Stack<>();
        this.helper = new Stack<>(); 
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        this.mainStack.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
      int output; 
        if(this.mainStack.empty()){
          return -1; 
        }
        while(!this.mainStack.empty()){
          this.helper.push(this.mainStack.pop()); //populate helper in reverse
        }
        output = this.helper.pop();

        while(!this.helper.empty()){
          this.mainStack.push(this.helper.pop()); //reinsert back into mainstack after pop
        }
        return output;
    }
    
    /** Get the front element. */
    public int peek() {
        int output;
        if(mainStack.empty())
          return -1;
        while(!mainStack.empty()){
          helper.push(mainStack.pop()); //populate helper in reverse
        }
        output = helper.peek();
        
        while(!helper.empty()){
          mainStack.push(helper.pop()); //reinsert back into mainstack 
        }
        return output;
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        return this.mainStack.size() == 0; 
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */

 //https://leetcode.com/problems/implement-queue-using-stacks/