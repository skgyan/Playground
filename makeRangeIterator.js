// steps
// a method which takes three params start, end and step
// returns a iterator object with next as a method prop
// next method returns the next value in the sequence untill it reaches the end of sequence 
// with value in the sequence it returns done prop to indeicate if sequence is done or not
// if done is true it means that sequence is done and pevious returned value was last in sequence

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextValueOfSequence = start;
    let iterationsCount = 0;

    const iterator = {
        next() {
            let result;

            if(nextValueOfSequence < end) {
                result = { value: nextValueOfSequence, done: false};
                nextValueOfSequence += step;
                iterationsCount++;
                return result;
            }

            return { value: iterationsCount, done: true};
        }
    }

    return iterator;
}


const iterator = makeRangeIterator(1, 10, 2);

let result = iterator.next();

while(!result.done) {
    console.log(result);
    result = iterator.next();
}

console.log(result);


// implement makeRangeIterator using Symbol.iterator

function makeRangeIteratorUsingSymbol( start = 0, end = Infinity, step = 1) {
    const iterator = {
        from: start,
        to: end,
        *[Symbol.iterator](){
            for (let index = this.from; index < this.to; index += step) {                
                yield index;
            }
        }
    }

    return iterator;
}

console.log('------------- symbol iterator ----------------');
const iter = makeRangeIteratorUsingSymbol(1,5,1);
console.log(...iter);

console.log(...makeRangeIteratorUsingSymbol(1,10,2));