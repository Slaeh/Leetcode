class Solution {
    public boolean isHappy(int n) {
        if(n == 1){
            return true;
        }
        Set<Integer> set = new HashSet<>();
        while(n != 1){
            String parsed = Integer.toString(n);
            int sum = 0;
            for(int i = 0 ; i < parsed.length(); i++){
                sum += Math.pow(Integer.parseInt(parsed.valueOf(parsed.charAt(i))), 2);
            }
            if(set.contains(sum)){
                return false;
            }
            else{
                set.add(sum);
                n = sum;
            }
        }
        return true; 
    }
}
//https://leetcode.com/problems/happy-number/
