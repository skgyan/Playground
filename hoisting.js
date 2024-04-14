
// another example how 
var b = 1;

function outer() {
    var b = 2;
    function inner() {
        console.log('first log b =', b); // undefined
        b++; // NaN becuase b is undefined
        console.log('here ', b);  // here undefined
        var b = 3 // b = 3
        console.log('again ', b); // again 3
    }
    inner();
}

outer();