function abc() {
    return arguments[0];
} //1

const xyz = () => arguments[0] // {}

console.log('abc(1) => ', abc(1));
console.log('xyz(1) => ', xyz(1));

console.log('-------------------- this -------------------------');


const obj = {
    i: 10,
    b: () => console.log('b arrow function', this.i, this), //arrow
    c() {
      console.log('c normal function or method of obj', this.i, this);
    },
  };
  
  obj.b(); // logs undefined
  obj.c(); // logs 10, Object { /* … */ }


console.log('---------------------- new ------------------------');

const obj2 = {
    name: "John Doe",
    func1: () => {
      console.log(this.name); // prints "John Doe"
    },
    func2: function() {
      console.log(this.name); // prints "undefined"
    }
  };
  
  obj2.func1(); // prints "John Doe"
  obj2.func2(); // prints "undefined"
  
