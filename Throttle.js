const throttle = (func, wait) => {
    // a flag to keep track of whether we're in throttle mode
    let inThrottle = false;
    let params = [];

    return (...args) => {
        params.push(...args);
        // if we're in throttle mode, we want to return
        if(inThrottle === false) {
            // call the function
            func(params);
            params = [];
            // and set inThrottle to true
            inThrottle = true;
            // after a certain amount of time, set inThrottle to false to allow the function to be called again
            setTimeout(() => {
                console.log('clearing throttle');
                inThrottle = false;
            }, wait);
        }
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
