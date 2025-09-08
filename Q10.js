function removeOddDuplicates(arr) {
  let freq = {}; 


  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num] = freq[num] + 1;
    }
  }


  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0 || freq[num] === 1) {
      result[result.length] = num; 
    }
  }

  return result;
}


let arr = [1, 2, 3, 5, 3, 7, 2, 5, 9];
console.log(removeOddDuplicates(arr));  
// Output: [2, 2, 7, 9]
