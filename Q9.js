function shortestMostFrequentWord(paragraph) {
  let words = [];   
  let currentWord = "";


  for (let i = 0; i <= paragraph.length; i++) {
    let ch = paragraph[i];

    if (ch === " " || ch === undefined) {
      if (currentWord !== "") {
        words.push(currentWord); 
        currentWord = "";
      }
    } else {
      currentWord += ch; 
    }
  }

  let freq = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (freq[word] === undefined) {
      freq[word] = 1;
    } else {
      freq[word]++;
    }
  }

  
  let maxFreq = 0;
  for (let word in freq) {
    if (freq[word] > maxFreq) {
      maxFreq = freq[word];
    }
  }

  let result = null;
  for (let word in freq) {
    if (freq[word] === maxFreq) {
      if (result === null || word.length < result.length) {
        result = word;
      }
    }
  }

  return result;
}

let paragraph = "cat bat rat cat bat bat rat cat";
console.log(shortestMostFrequentWord(paragraph));
