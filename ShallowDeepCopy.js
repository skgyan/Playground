const originalObj = { name: {
    first: 'Sushil',
    last: 'Kumar',
}, age: 30 };
const shallowCopy = { ...originalObj };

console.log(originalObj === shallowCopy); // false (different objects)
console.log(originalObj.name === shallowCopy.name); // true (same reference)

shallowCopy.name.first = 'Bob';
shallowCopy.age = 31;

console.log(originalObj); // Now name is 'Bob', but age is 30, { name: { first: 'Bob', last: 'Kumar' }, age: 30 }
console.log(shallowCopy); // { name: { first: 'Bob', last: 'Kumar' }, age: 31 }

const deepCopy = JSON.parse(JSON.stringify(originalObj));

console.log(originalObj === deepCopy); // false (different objects)
console.log(originalObj.name === deepCopy.name); // false (different references)

deepCopy.name.first = 'Sushil';

console.log(originalObj); // { name: { first: 'Bob', last: 'Kumar' }, age: 30 } no change
console.log(deepCopy); // { name: { first: 'Sushil', last: 'Kumar' }, age: 30 }
