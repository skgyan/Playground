// group anagram together

// using simple object
const groupAnagrams = (strs) => {
    let map = {};

    for(const str of strs) {
        let sorted = str.split('').sort().join('');

        // if key doesn't exists then add empty array corresponding to the key
        if(!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(str);
    }

    return Object.values(map);
}

// using Map
const groupAnagramsUsingMap = (strs) => {
    const map = new Map();

    for (const str of strs) {
        // Sort the string alphabetically
        const sortedStr = str.split('').sort().join('');

        // Use sorted string as a key in the map
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Convert the map values to an array
    return Array.from(map.values());
};


const groupAnagramsUsingMap2 = (strArr) => {
    
    const anagramMap = new Map();
    
    for( const str of strArr) {
        const sortedStr = str.toLowerCase().split('').sort().join('');
        
        if(!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(str);
    }
    
    return Array.from(anagramMap.values());
}
console.log(groupAnagramsUsingMap2(["eat", "tea", "tan", "ate", "nat", "bat"]));