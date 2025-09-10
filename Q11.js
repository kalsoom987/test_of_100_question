
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}


function canBeSumOfTwoPrimes(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (isPrime(i) && isPrime(n - i)) {
            console.log(n + " = " + i + " + " + (n - i));
            return true; 
        }
    }
    return false; 
}


let number = 34;
if (!canBeSumOfTwoPrimes(number)) {
    console.log(number + " cannot be expressed as the sum of two prime numbers.");
}
