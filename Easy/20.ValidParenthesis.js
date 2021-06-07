var isValid = function(s) {
    let leftBraces = [];
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == '('  || s.charAt(i) == '[' ||  s.charAt(i) == '{' ){
            leftBraces.push(s.charAt(i));
        }
        if(s.charAt(i) == ')'){
            if(leftBraces.pop() != '('){
                return false;
            }
        }
        if(s.charAt(i) == ']'){
            if(leftBraces.pop() != '['){
                return false;
            }
        }
        if(s.charAt(i) == '}'){
            if(leftBraces.pop() != '{'){
                return false;
            }
        }
    }
    if(leftBraces.length != 0){
        return false;
    }
    return true; 
};
//https://leetcode.com/problems/valid-parentheses/