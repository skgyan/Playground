let arrayOne = [ '⚡️', '🔎', '🔑', '🔩' ];
let arrayOneSlice = arrayOne.slice(0);  // creates a shallow copy

console.log(arrayOne); // [ '⚡️', '🔎', '🔑', '🔩' ]
console.log(arrayOneSlice); // [ '⚡️', '🔎', '🔑', '🔩' ]

arrayOneSlice[2] = '⚡️'

console.log(arrayOne); // [ '⚡️', '🔎', '🔑', '🔩' ]
console.log(arrayOneSlice); // [ '⚡️', '🔎', '⚡️', '🔩' ]

// shallow copy with two dimensional array

let twoDimensionalArray = [ '⚡️', [ '⚡️', '🔎' ], [ '🔑', '🔩' ], arrayOne ];
let twoDimensionalArraySlice = twoDimensionalArray.slice(0);

console.log('twoDimensionalArray = ', twoDimensionalArray); // [ [ '⚡️', '🔎' ], [ '🔑', '🔩' ], [ '⚡️', '🔎', '🔑', '🔩' ] ]
console.log('twoDimensionalArraySlice = ', twoDimensionalArraySlice); // [ [ '⚡️', '🔎' ], [ '🔑', '🔩' ], [ '⚡️', '🔎', '🔑', '🔩' ] ]

console.log('first level element update \n')
twoDimensionalArraySlice[0] = '🔑';

console.log('twoDimensionalArray[0] = ', twoDimensionalArray[0]); // '⚡️' 
console.log('twoDimensionalArraySlice[0] = ', twoDimensionalArraySlice[0]); // '🔑' // this shows first level of element are not referenced


console.log('\nsecond level element update \n')

console.log(`twoDimensionalArraySlice[0][1] = 🔑 \n`);
twoDimensionalArraySlice[1][1] = '🔑'; 

console.log('twoDimensionalArray[1][1] = ', twoDimensionalArray[1][1]); // 🔑
console.log('twoDimensionalArraySlice[1][1] = ', twoDimensionalArraySlice[1][1]); // 🔑 this shows second level of element are referenced

console.log('\nthird level element update \n')
console.log(`twoDimensionalArraySlice[2][2] = ⚡️ \n`);
twoDimensionalArray[2][2] = '⚡️';

console.log('twoDimensionalArray[2][2] = ', twoDimensionalArray[2][2]); // ⚡️
console.log('twoDimensionalArraySlice[2][2] = ', twoDimensionalArraySlice[2][2]); // ⚡️ 

// both arrays are getting updated
