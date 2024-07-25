// Array.filter polyfill

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myFilter = function(callbackFun) {
 const result = [];
 
 for (let index = 0; index < this.length; index++) {
    if(callbackFun(this[index], index, this)) {
        result.push(this[index]);
    }
 }

 return result;
}

console.log(arr.myFilter((item) => item % 2 === 0));