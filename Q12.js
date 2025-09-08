
function reverseWordsNoBuiltIns(s) {
  let result = "";        
  let current = "";       

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === " ") {
     
      for (let j = current.length - 1; j >= 0; j--) {
        result += current[j];
      }
  
      result += " ";
      current = "";
    } else {
   
      current += ch;
    }
  }


  for (let j = current.length - 1; j >= 0; j--) {
    result += current[j];
  }

  return result;
}


console.log(reverseWordsNoBuiltIns("Hello world"));         
console.log(reverseWordsNoBuiltIns("This is awesome"));    
console.log(reverseWordsNoBuiltIns("  keep  spaces  "));    
console.log(reverseWordsNoBuiltIns("one"));                 
console.log(reverseWordsNoBuiltIns(""));                    
