var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};
//https://leetcode.com/problems/defanging-an-ip-address/
