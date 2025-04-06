// using string reverse
const isPalindromeUsingString = (number) => {
    return number.toString() === number.toString().split('').reverse().join('');
}

const isPalindrome = (number) => {

    let reversedHalf = 0;
    let x = number;

    while( x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10); 
        x = Math.floor(x / 10); 
    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}


console.log(isPalindrome(12321));
console.log(isPalindrome(123212));