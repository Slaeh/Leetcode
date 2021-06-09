var checkIfPangram = function(sentence) {
    let set = new Set();
    for(let i = 0; i < sentence.length; i++){
        if(!set.has(sentence[i])){
            set.add(sentence[i]);
        }
    }
    if(set.size != 26){
        return false;
    }
    return true; 
};
//https://leetcode.com/problems/check-if-the-sentence-is-pangram/