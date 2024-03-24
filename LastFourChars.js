const str = 'ABC';


String.prototype.lastFourChars = function() {
    if(this.length < 4) {
        return 'not long enough';
    }
    return this.substring(this.length - 4);
}

console.log(str.lastFourChars());

console.log('Sushil Kumar'.lastFourChars());