var sortArrayByParity = function(A) {
    let res = [];
    for(let i =0; i < A.length; i++){
        if(A[i] % 2 == 0){
            res.unshift(A[i]);
        }
        else{
            res.push(A[i]);
        }
    }
    return res;
};
//https://leetcode.com/problems/sort-array-by-parity/