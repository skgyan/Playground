
let count = 0;

function temp(arr, int) {

    let index = 0;
    let item = null;
    let consecutiveCount = 0;

    while (index < arr.length) {
        count++;
        if(consecutiveCount === 0) {
            item = arr[index];
            consecutiveCount++;
        } else if(item === arr[index]) {
            consecutiveCount++;
        } else {
            consecutiveCount = 1;
            item = arr[index];
        }

        if(consecutiveCount === int) {
            arr.splice(index-int+1, int);
            return temp(arr, int);
        } 

        index++;
    }

    return arr;
}

const arr = [1,1,2,2,2,1,3,1,1];
console.log(temp(arr, 3));
console.log('count = ', count);
count = 0;
const arr2 = [1,1,1,2,2,2,1,3,1,1];
console.log(temp(arr2, 3));
console.log('count = ', count);

count = 0;
const arr3 = [1,1,2,2,1,3,1,1];
console.log(temp(arr3, 3));
console.log('count = ', count);
