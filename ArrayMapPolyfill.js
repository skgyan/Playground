// Array.map polyfill

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myMap = function(callbackFun) {
 const result = [];
 
 for (let index = 0; index < this.length; index++) {
  result.push(callbackFun(this[index], index, this));
 }

 return result;
}

console.log(arr.myMap((item) => item * 2));