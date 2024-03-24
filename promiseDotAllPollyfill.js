const promiseAll = (promises) => {
    // to store promise result
  const results = [];
  // counter for resolved promises
  let resolvedPromises = 0;

  // inner promise
  const innerPromise = new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((res) => {
        results[index] = res;
        resolvedPromises++;

        if (resolvedPromises === promises.length) {
          resolve(results);
        }
      })
      .catch(error => {
        reject(error);
      })
    });
  });

  return innerPromise;
};

const p1 = Promise.resolve(2);
const p2 = Promise.resolve("3");
// JS in-built method
Promise.all([p1, p2]).then((res) => console.log(res)); // this logs [2, "3"]
// polyfil 
promiseAll([p1, p2]).then((res) => console.log(res));
