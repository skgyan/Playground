const mySet = new Set([1,2,3,4,5]);

console.log(mySet); //Set(5) {1, 2, 3, 4, 5 }

// add a new element
mySet.add(6);

console.log(mySet); //Set(6) {1, 2, 3, 4, 5, 6 }

mySet.delete(3); 
console.log(mySet); // Set(5) {1, 2, 4, 5, 6 }

console.log(mySet.has(6)); //true
console.log(mySet.has(8)); //false

console.log(mySet.size); //5

// iterate over all elements
mySet.forEach((val) => {
    console.log(val); 
})

const values = mySet.values();
console.log(...values); // 1 2 3 4 5 6

mySet.clear();

console.log(mySet) // Set {}