function abc() {
  return arguments[0];
} //1

const xyz = () => arguments[0]; // {}
// const arguments = [1, 2, 3]; if I had arguments in enclosing scope then xyz would return 1

console.log("abc(1) => ", abc(1));
console.log("xyz(1) => ", xyz(1));

console.log("-------------------- this -------------------------");

const obj = {
  i: 10,
  b: () => console.log("b arrow function", this.i, this), //arrow
  c() {
    console.log("c normal function or method of obj", this.i, this);
  },
};

obj.b(); // logs undefined
obj.c(); // logs 10, Object { /* … */ }

console.log("---------------------- new ------------------------");

const obj2 = {
  name: "John Doe",
  func1: () => {
    console.log("func1", this.name); // prints undefined
  },
  func2: function () {
    console.log(this.name); // prints "undefined"
  },
};

obj2.func1(); // prints "John Doe"
obj2.func2(); // prints "undefined"

//another example

const obj3 = {
  i: 10,
  b: () => console.log(this.i, this, " arrow function"),
  c() {
    console.log(this.i, this, " normal method");
  },
};

obj3.b();
console.log("-------------------------");
obj3.c();
