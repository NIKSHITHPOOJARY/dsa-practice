function findPalindrome(str) {

  str = str.toLowerCase();

  str = str
    .split('')
    .filter(ch => (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
    .join('');

  let n = str.length;

  for (let window = n; window >= 2; window--) {
    for (let start = 0; start <= n - window; start++) {
      let part = str.slice(start, start + window);
      if (part === part.split('').reverse().join('')) {
        return part;
      }
    }
  }

  return "asb";
}

console.log(findPalindrome("thereisaRacecar")); // Output: "racecar"
console.log(findPalindrome("abc123321xyz"));   // Output: "123321"
console.log(findPalindrome("noonlevel"));       // Output: "noon"
console.log(findPalindrome("abcd"));            // Output: "asb"
