function longestPalindrome(s) {
  if (s.length < 1) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
  
    let odd = expandAroundCenter(s, i, i);

   
    let even = expandAroundCenter(s, i, i + 1);

  
    let currentLongest = odd.length > even.length ? odd : even;

 
    if (currentLongest.length > longest.length) {
      longest = currentLongest;
    }
  }

 return longest;
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
 
  return s.slice(left + 1, right);
}
 const result =(longestPalindrome("abcd"));
 console.log("longst substring palindrom" ,result);
 