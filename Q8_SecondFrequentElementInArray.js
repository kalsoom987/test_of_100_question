function secondMostFrequent(arr) {
  let freq = {};


  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (freq[el] === undefined) {
      freq[el] = 1;
    } else {
      freq[el]++;
    }
  }

  let firstMax = 0, secondMax = 0;

  for (let key in freq) {
    let count = freq[key];
    if (count > firstMax) {
      secondMax = firstMax;
      firstMax = count;
    } else if (count > secondMax && count <= firstMax) {
      secondMax = count;
    }
  }


  let result = [];
  for (let key in freq) {
    if (freq[key] === secondMax) {
      result.push(Number(key)); 
    }
  }

  return result;
}

// Example
let arr = [1, 3, 2, 3, 4, 1, 3, 2, 2, 4, 4, 4];
console.log(secondMostFrequent(arr));