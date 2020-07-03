class Solution {
    public int findNumbers(int[] nums) {
        int even =0;
        for(int i =0; i < nums.length; i++){
        int counter =1;
           while((nums[i] /= 10) != 0){
               counter++;
           }

           if(counter % 2 == 0){
               even++;
           }

         }
         return even;
    }
}
//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
