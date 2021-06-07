class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] x;
        int[] y;
        int count = 0, xCounter = 0, yCounter =0;
        x = new int [n];
        y = new int [n];
        int[] res;
        res = new int [2 * n];
        
        for(int i = 0; i < n ; i++){
            x[i] = nums[i];
        }
        
        for(int i = n; i < nums.length; i++){
            y[count] = nums[i];
            count++;
        }
        
        for(int i = 0; i < nums.length; i++){
            if(i % 2 == 0){
                res[i] = x[xCounter];
                xCounter++;
            }
            else{
                res[i] = y[yCounter];
                yCounter++;
            }
        }
        return res;
    }
}
//https://leetcode.com/problems/shuffle-the-array/