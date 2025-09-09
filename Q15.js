
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b; 
        a = temp;
    }
    return a;
}


function gcdOfArray(arr) {
    let result = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }

    return result;
}


let arr = [18, 27, 45];
console.log("GCD of array:", gcdOfArray(arr));
