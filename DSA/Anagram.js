// An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.
// ate = eat = tea = aet
const anagram = (str1, str2) => {
    // conver to same case - lower, remove non alphabets, sort
    // ate = aet, eat = aet, tea = aet
    const format = (str) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    //Note : replace(/[^a-z]/g, '') - replace all non alphabets with empty, ^ means not
    return format(str1) === format(str2);
}

console.log(anagram('anagram', 'nag@aram'));
console.log(anagram('rat', 'car'));
console.log(anagram('aacc', 'caac'));