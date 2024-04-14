function currying(fn) {
    return function curried(...args) {
        
        console.log('curried args => ', args, ' args.length = ', args.length, ' fn.length = ', fn.length);

        if(args.length >= fn.length) {
            console.log('return fn(...args)', 'fn.length = ', fn.length);
            return fn(...args);
        } else {
            return curried.bind(null, ...args);
        }
    }
}

function test(a,b,c) {
    return a + b + c;
}

const curriedTotal = currying(test);

const getLogger = () => {
    let count = 1;
    return (value) => {
        console.log('\n----------- getLogger start -----------\n');
        console.log(`Output for input ${count++} is`, value);
        console.log('\n----------- getLogger end -----------\n');

    }
}

const log = getLogger();
log(curriedTotal(10)(20)(30));
log(curriedTotal(10, 20)(30));
log(curriedTotal(10)(20, 30));