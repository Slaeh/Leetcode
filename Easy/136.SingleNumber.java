class Solution {
    public int singleNumber(int[] nums) {
       ArrayList<Integer> list = new ArrayList<>();
       for(int i : nums){
           if(!list.contains(i)){
              list.add(i);
           }else{
               list.remove(new Integer(i));
           }
       }
       return list.get(0);
    }
}
