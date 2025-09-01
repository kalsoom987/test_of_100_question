function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPalindrome(num) {
  let str = num + "";                 
  let rev = "";
  
  
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  
  return str === rev;
}

function checkPrimePalindrome(num) {
  if (isPrime(num) && isPalindrome(num)) {
    console.log(num + " is BOTH Prime and Palindrome ");
  } else {
    console.log(num + " is NOT both prime and palindrome ");
  }
}


checkPrimePalindrome(131); 
checkPrimePalindrome(133);
checkPrimePalindrome(11);   
