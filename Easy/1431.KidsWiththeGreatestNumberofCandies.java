import java.util.Arrays;
import java.util.Collections;
class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        ArrayList<Boolean> res = new ArrayList<>();
        for(int i =0; i < candies.length; i++){
            candies[i] += extraCandies;
            if(candies[i] == findMax(candies)){
                res.add(true);
            }
            else{
                res.add(false);
            }
            candies[i] -= extraCandies;
        }
        return res;
    }
    
    public int findMax(int[] candies){
        int max = candies[0];
        for(int i = 0; i < candies.length; i++){
            if(candies[i] > max){
                max = candies[i];
            }
        }
        return max;
    }
}
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/