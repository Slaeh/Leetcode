var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    let parsed = n.toString();
    for(let i = 0; i < parsed.length; i++){
        sum += parseInt(parsed[i]);
        product *= parseInt(parsed[i]);
    }
    return product - sum;
};
//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/