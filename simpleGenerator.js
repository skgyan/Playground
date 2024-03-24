function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = simpleGenerator();

//one way of using generator
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2


//another way of using generator using for of
console.log('---- Using for of ----');
for (const value of simpleGenerator()) {
    console.log(value); // 1, 2, 3, 4
}

//another way of using generator using spread
// spread internally calls next() and returns value
console.log(...simpleGenerator()); // 1, 2, 3, 4


