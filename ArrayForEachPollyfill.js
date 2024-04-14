Array.prototype.customForEach = function (callback, thisContext) {
    if(typeof callback !== 'function') {
        throw `${callback} is not a function`;
    }

    for (let index = 0; index < this.length; index++) {
        // if(this[index].hasOwnProperty) {
            if(thisContext) {
                callback.call(thisContext, this[index], index, this);
            } else {
                callback(this[index], index, this);
            }
       // }
    }
}

Array.prototype.extraProp = 'test';

const arr = [1, 2, 3, 4, 5];
const newArr = new Array(1, 2, 3, 4, 5);
// console.log(newArr.extraProp);
//console.log(newArr.length);

for (const item in arr) {
    // if (arr.hasOwnProperty(item)) {
        const element = arr[item];
        console.log(element);
    // }
}

console.log('----- arr.customForEach ----');
arr.customForEach((item, index) => {
    console.log(item);
});