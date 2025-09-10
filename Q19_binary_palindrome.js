
function toBinary(num) {
    let binary = [];
    while (num > 0) {
        let remainder = num % 2;
        binary[binary.length] = remainder;
        num = Math.floor(num / 2);
    }

    let binaryCorrect = [];
    for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
        binaryCorrect[j] = binary[i];
    }

    return binaryCorrect;
}

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

for (let i = 1; i <= 1000; i++) {
    let binaryArr = toBinary(i);

    if (isPalindrome(binaryArr)) {
    
        let binaryStr = "";
        for (let k = 0; k < binaryArr.length; k++) {
            binaryStr = binaryStr + binaryArr[k];
        }
        console.log(i, "=>", binaryStr);
    }
}
