const sym = Symbol('name');

console.log(sym); // Symbol(name)

const key = Symbol('key');

var obj = {
    [key]: 'test key',
    [Symbol.for('other key')]: 'other key',
    'name': 'test name'
}

console.log(key);

console.log('------------- obj -------------');
console.log(obj); //{ name: 'test name', [Symbol(key)]: 'test key' }

console.log('------------- Object keys-------------');
console.log(Object.keys(obj)); //[ 'name' ]

console.log('------------- for in -------------');
for (const iterator in obj) {
    console.log(iterator);
}

console.log('------------- for of -------------');
for (const iterator of Object.keys(obj)) {
    console.log(iterator);
}

console.log('------------ JSON.stringify -------------');
console.log(JSON.stringify(obj)); //{"name":"test name"}

console.log('------------- Object.getOwnPropertySymbols -------------');
console.log(...Object.getOwnPropertySymbols(obj));

console.log('------------- obj[key] -------------');
console.log(obj[key]);

console.log('------------- obj[Symbol.for("other key")] -------------');
console.log(obj[Symbol.for('other key')]);

console.log(Symbol("foo") === Symbol("foo")); //false

// use Symbol.for
console.log(Symbol.for("foo") === Symbol.for("foo")); //true
