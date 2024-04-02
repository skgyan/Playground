let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = (array) => {

    for (let index = 0; index < array.length / 2; index++) {
        const start = index;
        const end = array.length - index - 1;

        [array[start], array[end]] = [array[end], array[start]];  
    }

    return array;
}

console.log(reverseArray(array));


function reverseArr(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return [arr[arr.length - 1]].concat(reverseArr(arr.slice(0, arr.length - 1)));
    }
  }
  
  const arr = [1, 2, 3, 4, 5];
  const reversedArr = reverseArr(arr);
  console.log(reversedArr); // [5, 4, 3, 2, 1]