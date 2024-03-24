const obj = {
    name: 'Sk',
    age: 25,
    location: 'USA'
}

// for (const iterator of obj) {
//     console.log(iterator);
// }

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}