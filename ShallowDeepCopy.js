const originalObj = { name: {
    first: 'Sushil',
    last: 'Kumar',
}, age: 30 };
const shallowCopy = { ...originalObj };

console.log(originalObj === shallowCopy); // false (different objects)
console.log(originalObj.name === shallowCopy.name); // true (same reference)

shallowCopy.name.first = 'Bob';
shallowCopy.age = 31;

console.log(originalObj); // Now 'Bob', since the change is reflected in the original object.
console.log(shallowCopy);

shallowCopy.name.first = 'Sushil';

console.log(originalObj); // Now 'Bob', since the change is reflected in the original object.
console.log(shallowCopy);


const deepCopy = JSON.parse(JSON.stringify(originalObj));

console.log(originalObj === deepCopy); // false (different objects)
console.log(originalObj.name === deepCopy.name); // false (different references)