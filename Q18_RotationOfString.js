function isRotation(s1, s2) {

    if (s1.length !== s2.length) {
        return false;
    }

    let doubled = "";
    for (let i = 0; i < s1.length; i++) {
        doubled += s1[i];
    }
    for (let i = 0; i < s1.length; i++) {
        doubled += s1[i];
    }


    for (let i = 0; i <= doubled.length - s2.length; i++) {
        let j = 0;
        while (j < s2.length && doubled[i + j] === s2[j]) {
            j++;
        }
        if (j === s2.length) {
            return true; 
        }
    }

    return false; 
}


console.log(isRotation("abcd", "cdab"));       
console.log(isRotation("abcd", "acbd"));       
console.log(isRotation("waterbottle", "erbottlewat"));
