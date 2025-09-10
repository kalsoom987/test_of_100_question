
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;          
        num = Math.floor(num / 10);  
    }
    return sum;
}


function findNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = sumOfDigits(arr[i]);

        
        if (sum === i) {
            result.push(arr[i]);
        }
    }

    return result;
}


let arr1 = [12, 23, 34, 22, 15, 40];
console.log(findNumbers(arr1));  


let arr2 = [0, 10, 20, 21, 22];
console.log(findNumbers(arr2));  
