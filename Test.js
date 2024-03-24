const names=["Emp1","Emp2","Emp3","Emp4","Emp5","Emp4","Emp1","Emp2","Emp4"];
console.log(new Set(names));

const obj = {
    name: "Sushil",
    age: 40,
    location: "Mount Pleasant, SC",
    sal: undefined,
    car: null
}

const jsonObj = JSON.stringify(obj);

console.log('jsonObj = ', jsonObj);
console.log('obj = ', obj);

console.log('---------------------------------------------------------');
const replacer = (key, item) => {     
    return typeof item === 'number' ? item - 10 : item
}
const jsonObjWithReplacer = JSON.stringify(obj, replacer);
console.log(`json with replacer ${jsonObjWithReplacer}`);
console.log('---------------------------------------------------------');

const jsonObjWithReplacerAndSpace = JSON.stringify(obj, replacer, ' ');
console.log(`json with replacer and space ${jsonObjWithReplacerAndSpace}`);


function jsonStringify(value) {
    if(typeof value === 'string') {
        // return `"${value.replace(/"/g, '\\"')}"`;
        return `"${value}"`;
    } else if (typeof value === 'number') {
        return value.toString();
    }
    else if( value === null) {
        return 'null';
    } else if( value === undefined) {
        return undefined;
    }

    if (Array.isArray(value)) {
        return `[${value.map(jsonStringify).join(',')}]`;
    }

    if (typeof value === 'object') {
        const props = [];        
        for(const key in value) {
            if(value.hasOwnProperty(key)) {
                const propValue = jsonStringify(value[key]);
                                
                if(propValue !== undefined) {
                    props.push(`"${key}":${propValue}`);
                }
            }
        }
        return `{${props.join(',')}}`;
    }
}

console.log('-------------------------- Array -------------------------------');
console.log('JSON.stringify = ',JSON.stringify([10, 'abc', undefined, null]));
console.log('jsonStringify ', jsonStringify([10, 'abc', undefined, null]));

console.log('-------------------------- Object -------------------------------');
console.log('JSON.stringify = ',JSON.stringify(obj));
console.log('jsonStringify ', jsonStringify(obj));