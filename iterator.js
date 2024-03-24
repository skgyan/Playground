function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const iterator = generatorFunction();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: true }

console.log([...generatorFunction()]); // [1, 2, 3]

for(const value of generatorFunction()) {
    console.log(value);
    // 1
    // 2
    // 3
}