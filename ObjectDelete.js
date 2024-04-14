const obj = {
    foo: 'foo',
};

const objCreate = Object.create({
    foo: 'foo',
});


console.log(obj); // { foo: 'foo' }
console.log(objCreate); // {} what happened here? foo goes into prototype chain

console.log(delete obj.foo); // true
console.log(delete objCreate.foo); // true returns true but foo is still in prototype chain

console.log(obj.foo); // undefined
console.log(objCreate.foo); // foo - what?? becuase it is in prototype chain hence don't get deleted from there using delete

console.log(delete objCreate.__proto__.foo); // true returns true and foo is deleted from prototype chain
console.log(objCreate.foo); // undefined


const myObj = {
    bar: 'bar',
};

function temp(obj) {
    obj.foo = 'foo';
}

temp(myObj);
console.log(myObj);


