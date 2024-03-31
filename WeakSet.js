const myWeakSet = new WeakSet();

const name = {'name': 'John'};
myWeakSet.add(name); 

console.log(myWeakSet.has(name)); // true
console.log(typeof myWeakSet); // object

console.log('------------------ execRecursively ----------------');
// Execute a callback on everything stored inside an object
function execRecursively(func, obj, _tracker = new WeakSet()) {
// Avoid infinite recursion
    if(_tracker.has(obj)) {
        return;
    }

    func(obj);

    if(typeof obj === 'object' && obj) {
        _tracker.add(obj);

        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                execRecursively(func, obj[key], _tracker);                
            }
        }

        _tracker.delete(obj);
    }
}

const foo = {
    foo: "Foo",
    bar: {
        bar: "Bar",
    },
};

foo.bar.baz = foo; // Circular reference!

execRecursively((obj) => console.log(obj), foo);



  