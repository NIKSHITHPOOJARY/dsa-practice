function isPaindrome(str)
{
   return str === str.split('').reverse('').join('');
}

console.log(isPaindrome("hello"));
console.log(isPaindrome("madam"));

