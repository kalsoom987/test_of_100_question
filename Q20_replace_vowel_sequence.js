function replaceVowels(str) {
   
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = "";

    
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        let replaced = ch;

       
        for (let j = 0; j < vowels.length; j++) {
            if (ch === vowels[j]) {
            
                replaced = vowels[(j + 1) % vowels.length];
                break;
            }
        }

        result += replaced; 
    }

    return result;
}


console.log(replaceVowels("hello"));   
console.log(replaceVowels("education")); 
