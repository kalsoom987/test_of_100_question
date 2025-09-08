function swapPairs(str) {
    let result = "";

    for (let i = 0; i < str.length; i += 2) {
       
        if (i + 1 < str.length) {
            result += str[i + 1];  
            result += str[i];      
        } else {
            
            result += str[i];
        }
    }

    return result;
}

console.log(swapPairs("abcd"));   
console.log(swapPairs("abcde"));  
