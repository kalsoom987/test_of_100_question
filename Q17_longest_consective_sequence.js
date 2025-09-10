function exists(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

function longestConsecutive(arr) {
    let longest = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

       
        if (!exists(arr, num - 1)) {
            let current = num;
            let length = 1;

            console.log("Starting new sequence from:", current);

       
            while (exists(arr, current + 1)) {
                current = current + 1;
                length = length + 1;
                console.log("Extended sequence to:", current, " length:", length);
            }

            
            if (length > longest) {
                longest = length;
                console.log("Updated longest length =", longest);
            }
        }
    }

    console.log("Final Longest Sequence Length =", longest);
    return longest;
}


let arr = [100, 4, 200, 1, 3, 2];
longestConsecutive(arr);
