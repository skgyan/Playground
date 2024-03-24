const { error } = require("console");

const multipleOfThree = (arr) => {
  // console.log(arr);
  //const result = [];

  //    for(let i=0; i<arr.length; i++) {
  //      if(arr[i] % 3 === 0) {
  //         console.log(arr[i], arr[i]/3 === 0)
  //         result.push(arr[i])}
  //      else false;
  //    }

  const filtered = arr.filter((num) => (num % 3 === 0 ? num : false));
  console.log("filtered => ", filtered);
  return filtered;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(multipleOfThree(arr));

const [a, b, c, ...rest] = arr;
console.log(`a = ${a}, b = ${b}, c=${c}, rest = ${rest}`);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

myPromise.then((res) => {
  console.log(res);
});

const immediatelyResolvedPromise = new Promise((resolve, reject) => {
  reject("immediately rejected");
});

immediatelyResolvedPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("error = ", error);
  });
