const range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
}

console.log([...range])

/*
const obj = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        current: this.from;
        last: this.to;
        return {
            next() {
                console.log(this.current);
                if (this.current <= this.last) {
                    return { done: false, value: this.current++}
                } else {
                    return {done: true}
                }
            }
        }        
    }
}
*/



