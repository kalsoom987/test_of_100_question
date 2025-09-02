function rotateUntilMax(arr) {
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  while (arr[0] !== max) {
    let first = arr[0];
 
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first; 
  }

  return arr;
}


console.log(rotateUntilMax([5, 2, 7, 4, 1]));
