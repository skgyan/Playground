// pollyfil for promise.all

const p1 = Promise.resolve(2)
const p2 = Promise.resolve("3")
Promise.all([p1,p2]).then(res => console.log(res)) // this logs [2, "3"]
 
function MyPromiseAll(promises){
 const innerPromise = new Promise((res, rej) => {    
    
    const result = [];
    promises.map((promise) => {
        console.log(promise);
        const response = promise.then((res) => { 
            console.log('res = ', res);
            result.push(res);
        });
        console.log(response);
    });
    console.log('result = ', result);
    return result;
 })
 return innerPromise;
}
MyPromiseAll([p1,p2]).then(res => console.log(res)) // this should also log [2, "3"]