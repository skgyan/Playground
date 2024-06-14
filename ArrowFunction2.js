"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this), //arrow this points to window in browser
  c() {
    console.log(this.i, this);
  },
  d() {
    const f = () => console.log('from f',this.i, this);
    f();
  }
};

obj.b(); // undefined {} in node
// undefined window or global object
obj.c(); // logs 10, Object { /* … */ }

const { b } = obj;
b();


let person = {
  name: 'John',
  age: 30,
  greet: () => {
    console.log(
      'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  },
};
person.greet();

const greet = person.greet;
greet.call(person);

