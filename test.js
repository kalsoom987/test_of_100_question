function haveSameUniqueElements(arr1, arr2) {

  let set1 = new Set(arr1);
  let set2 = new Set(arr2);


  if (set1.size !== set2.size) return false;


  for (let value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }

  return true; 
}

console.log(haveSameUniqueElements([1, 2, 2, 3, 4], [4, 3, 1, 2, 2])); // true
console.log(haveSameUniqueElements([1, 2, 3], [1, 2, 4]));             // false
console.log(haveSameUniqueElements([1, 1, 1], [1]));                   // true
console.log(haveSameUniqueElements([5, 6, 7], [7, 6, 5]));             // true