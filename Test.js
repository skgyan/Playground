const throttle = (fn, delay) => {
    let params = [];
    let timer = null;

    return function(...args) {
        params.push(...args);

        if(timer !== null) return;

        timer = setTimeout(()=>{
            fn(...params);
            params = [];
            timer = null;
        }, delay);
    }
}


// test
let prev = Date.now();

const test = (...args) => {
    console.log('test called after ', Date.now() - prev, ' ms', ...args);
    prev = Date.now();
}

const throttledTest = throttle(test, 50);

setTimeout(() => throttledTest('call 1'), 10);
setTimeout(() => throttledTest('call 2'), 30);
setTimeout(() => throttledTest('call 3'), 100);