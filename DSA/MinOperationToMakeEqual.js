const minOperationToMakeEqual = (arr) => {
    // first step - find frequency of each element
    const frequencyMap = new Map();

    let maxFrequency = 0;
    for(const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        maxFrequency = Math.max(frequencyMap.get(num), maxFrequency);
    }
    console.log(frequencyMap);

    // second step - find max frequency
    // let maxFrequency = 0;
    // for(const frequency of frequencyMap.values()) {
    //     maxFrequency = Math.max(frequency, maxFrequency);
    // }
    console.log(maxFrequency);
    return arr.length - maxFrequency;
}

console.log('[1,2,2,3] = ', minOperationToMakeEqual([1,2,2,3]));
console.log('[1,2,2,2,3] = ', minOperationToMakeEqual([1,2,2,2,3]));
console.log('[1,2,2,2,3,4,5,5] = ', minOperationToMakeEqual([1,2,2,2,3,4,5,5]));
console.log('[1,2,2,2,3,4,5,5,5] = ', minOperationToMakeEqual([1,2,2,2,3,4,5,5,5]));
console.log('[1,2,2,2,3,4,5,5,5,2] = ', minOperationToMakeEqual([1,2,2,2,3,4,5,5,5,2]));