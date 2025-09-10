function findClosestToAverage(arr) {
    let n = arr.length;

    
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i];
    }

 
    let average = sum / n;


    let closest = arr[0];
    let minDiff = arr[0] - average;
    if (minDiff < 0) minDiff = -minDiff;


    for (let i = 1; i < n; i++) {
        let diff = arr[i] - average;
        if (diff < 0) diff = -diff;

        if (diff < minDiff) {
            minDiff = diff;
            closest = arr[i];
        }
    }

    return closest;
}


let arr = [2, 4, 7, 9];
console.log(findClosestToAverage(arr));  
