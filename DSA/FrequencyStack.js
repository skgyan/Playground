class FreqStack {
    constructor() {
        this.freqMap = new Map();
        this.freqStack = new Map();
        this.maxFrequency = 0;
    }

    push(value) {
        const frequency = (this.freqMap.get(value) || 0 ) + 1;
        this.freqMap.set(value, frequency);

        if(frequency > this.maxFrequency) {
            this.maxFrequency = frequency;
            this.freqStack.set(frequency, []);
        }

        this.freqStack.get(frequency).push(value);

        console.log("\nfreqMap => ", [...this.freqMap.entries()]);
        console.log("freqStack => ", [...this.freqStack.entries()]);
    }

    pop() {
        console.log("\n= Pop =");
        const value = this.freqStack.get(this.maxFrequency).pop();
        this.freqMap.set(value, this.freqMap.get(value)-1);

        if(this.freqStack.get(this.maxFrequency).length === 0) {
            this.maxFrequency--;
        }

        console.log("freqMap => ", [...this.freqMap.entries()]);
        console.log("freqStack => ", [...this.freqStack.entries()]);
        return value;
    }
}


  const stack = new FreqStack();
  stack.push(5); // [5]
  stack.push(7); // [5, 7]
  stack.push(5); // [5, 7, 5]
  stack.push(7); // [5, 7, 5, 7]
  stack.push(4); // [5, 7, 5, 7, 4]
  stack.push(5); // [5, 7, 5, 7, 4, 5]
  console.log(stack.pop()); // 5, stack becomes [5, 7, 5, 7, 4]
  console.log(stack.pop()); // 7, stack becomes [5, 7, 5, 4]
  console.log(stack.pop()); // 5, stack becomes [5, 7, 4]
  console.log(stack.pop()); // 4, stack becomes [5, 7]
  console.log(stack.pop()); // 7, stack becomes [5]
  console.log(stack.pop()); // 5, stack becomes []