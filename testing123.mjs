import {freeze, anotherFreeze} from "./ObjectFreeze.mjs";

// console.log(a);
// console.log(b);

// var a = b = 5; // b is not defined

console.log(1 < 2 < 3); // 1 < 2 = true, true < 3 = 1 < 3 = true
console.log( 3 > 2 > 1); // 3 > 2 = true, true > 1 = 1 > 1 = false


globalThis.name = 'John';

function test() {
    name = 'Sushil';
    const foo = () => {
        console.log(this.name);
    }

    foo();
}

// test();

// function test123() {
// age = 30;
// var obj = {
//     age: 15,
//     foo: () => {
//         console.log(this.age);
//     }
// }

// obj.foo();
// }

// test123();


// (function() {
//     //console.log(a, b); // b is not defined becuase b doen'st have decleartion, it has only initialization
//     var a = b = 3;
//     console.log(a, b); // 3, 3
// })();
// console.log(a); // a is not defined


freeze();

anotherFreeze();