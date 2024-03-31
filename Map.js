const map = new Map();
//set value
map.set('a', 1);
//get value
console.log(map.get('a')); // 1
//change value to the same key
map.set('a', 97); // 97
//size
map.size // 1 - same as size method of Set
//delete
map.delete('a'); 


//below doesn't work well
map['a'] = 'Aaaa';
console.log(map); // Map {a: 'Aaaa'}
//below method doesn't work
console.log(map.has('a')); // flase
map.delete('a'); //false

//right way is using set method
map.set('a');


const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

console.log('----------------- for of -----------------');
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

console.log('----------------- for of keys -----------------');
for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

console.log('----------------- for of values -----------------');
for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

console.log('----------------- for of entries -----------------');
for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

console.log('----------------- forEach -----------------');
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one

console.log('----------------- merge maps and array -----------------')
const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Merge maps with an array. The last repeated key wins.
  const merged = new Map([...first, ...second, [1, "eins"]]);
  
  console.log(merged.get(1)); // eins
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three

  console.log(typeof first);

console.log('----------------- JSON.stringify -----------------')

  function replacer(key, value) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

const originalValue = new Map([['a', 1]]);
const str = JSON.stringify(originalValue, replacer);
console.log(originalValue, str);

console.log(first, JSON.stringify(first, replacer));

console.log('----------------- JSON.parse -----------------');

function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
}

const obj = JSON.parse(str, reviver);
console.log(obj);