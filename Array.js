const array = [1, 2, 3, 4, 5];

//splice - (p - permanent) - this method changes the orginal array
// splice(start, deleteCount, item1) - deleteCount - number of elements to delete, item1 - new element
// deleteCount - if not specified - all elements from start to end will be deleted
//splice(start, deleteCount, item1, item2, /* …, */ itemN)
array.splice(2); // [1, 2] // deleteCount is not specified, elements from index 2 to end will be deleted
console.log('----- array.splice(2) -----');
console.log('array = ', array);

//concat - returns a new array
console.log('----- array.concat(6) -----');
console.log(array.concat(6)); // [1, 2, 6]
console.log('array = ', array); // [1, 2]

//slice - returns a new array, no changes to the original array
console.log('----- array.slice(0,1) -----');
console.log(array.slice(0,1)); // [1]
console.log('array = ', array); // [1, 2]

// delete - deletes an element from an array at specified index and makes it empty
console.log('----- delete array[0] -----');
console.log(delete array[0]);
console.log('array = ', array); // [empty, 2]

console.log('----- array.splice(1, 2) -----');
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3] // splice respectes the empty elements
console.log(arr); // [1, 4, empty, 6]

console.log('----- array.reduce -----');
//  [].reduce((acc, cur) => acc + cur); // TypeError 
console.log([0].reduce((acc, cur) => acc + cur)); // 0 - either array has an element or initial value is passed
console.log([].reduce((acc, cur) => acc + cur, 0)); // 0 - either array has an element or initial value is passed