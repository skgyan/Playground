function debounce(fn, delay) {
    let timer = null;

    return function(...args) {
        if(timer) {
            console.log('clear timer = ', ...args);
            clearTimeout(timer);
        }

        timer = setTimeout(() => fn(...args), delay);
    }
}

let startTime = Date.now();

const fetchData = (call) => {
    console.log(`Data fetched in ${Date.now() - startTime}ms in ${call}`);
}

const debouncedFetchData = debounce(fetchData, 50);

setTimeout(() => debouncedFetchData('call 1'), 30);
setTimeout(() => debouncedFetchData('call 2'), 60); // will clear the timer of previous call

setTimeout(() => debouncedFetchData('call 3'), 130); 
setTimeout(() => debouncedFetchData('call 4'), 150); // will clear the timer of previous call
setTimeout(() => debouncedFetchData('call 5'), 180); // will clear the timer of previous call

/*
output - no gurantee of call 2 
clearing timer =>  call 2
Data fetched in 124ms in call 2
clearing timer =>  call 3
clearing timer =>  call 4
clearing timer =>  call 5
Data fetched in 249ms in call 5
*/