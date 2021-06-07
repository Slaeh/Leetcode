import java.util.ArrayList;
import java.lang.Math;
class Solution {
    public int getDecimalValue(ListNode head) {
        int sum = 0;
        ArrayList<Integer> res = new ArrayList();
        while(head != null){
            res.add(head.val);
            head = head.next;
        }
        double power = Math.pow(2,res.size()-1);
        for(int i = 0; i < res.size(); i++){
            if(res.get(i) == 1){
                sum += power;
            }
            power /= 2;
        }
        return sum;
    }
}
//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/