const fruits = ["apple", "banana", "apple", "orange", "apple"];

// result = { apple: 3, banana: 1, orange: 1}

// loop over fruits, create an object
// check if item in the array exists on the object as a key
// if not then add and value as 1
// if already exists then update value by 1

const expectedResult = {};

fruits.forEach((fruit) => {
//   expectedResult.hasOwnProperty(fruit) ? (expectedResult[fruit] += 1) : (expectedResult[fruit] = 1);
    expectedResult[fruit] = expectedResult[fruit] ? expectedResult[fruit] + 1 : 1;
});

console.log(expectedResult);
