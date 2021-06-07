class Solution {
    public int romanToInt(String s) {
            Map<Character,Integer> map = new HashMap<>();
            map.put('I',1);
            map.put('V',5);
            map.put('X',10);
            map.put('L',50);
            map.put('C',100);
            map.put('D',500);
            map.put('M',1000);
            int sum = 0, i = 1;
            ArrayList<Character> arr = new ArrayList<Character>();
                for (char c : s.toCharArray()) {
                arr.add(c);
            }
            while(arr.size() != 1 && arr.size() != 0){
                if(arr.get(i) == 'V' && arr.get(i - 1) == 'I' ){
                    sum += 4;
                    arr.remove(0);
                    arr.remove(0);
                }
                 else if(arr.get(i) == 'X' && arr.get(i - 1) == 'I'){
                    sum += 9;
                    arr.remove(0);
                     arr.remove(0);
                }
                else if(arr.get(i) == 'L' && arr.get(i - 1) == 'X'){
                    sum += 40;
                    arr.remove(0);
                    arr.remove(0);
                }
                else if(arr.get(i) == 'C' && arr.get(i - 1) == 'X'){
                    sum += 90;
                    arr.remove(0);
                    arr.remove(0);
                }
                else if(arr.get(i) == 'D' && arr.get(i - 1) == 'C'){
                    sum += 400;
                    arr.remove(0);
                    arr.remove(0);
                }
                else if (arr.get(i) == 'M' && arr.get(i - 1) == 'C'){
                    sum += 900;
                    arr.remove(0);
                    arr.remove(0);
                }
                
                else{
                   sum += map.get(arr.get(i - 1));
                    arr.remove(0);
                }
        
            }
            if(arr.size() == 1) sum += map.get(arr.get(0));
            return sum;
          
    }
    
}
//https://leetcode.com/problems/roman-to-integer/
