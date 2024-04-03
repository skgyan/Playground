const keys = ["name", "age"];
const values = ["Sushil", 30];

// Object.fromEntries(iterable) 
console.log(Object.fromEntries(keys.map((key, i) => [key, values[i]])));

// Object.entries()
console.log('----------------- Object.entries() -----------------');
console.log(Object.entries(keys.map((key, i) => [key, values[i]])));

console.log('----------------- Object.values() -----------------');
console.log(Object.values(keys.map((key, i) => [key, values[i]])));