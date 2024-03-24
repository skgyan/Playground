const myArray = [1,2,3,4,[5,6,7,8]];
function flatten(array){
// impliment this function    
    const resultArray = [];

    const innerFunction = (inputArray) => {
        for (let index = 0; index < inputArray.length; index++) {
            if(Array.isArray(inputArray[index])) {
                innerFunction(inputArray[index]);
            } else {
                resultArray.push(inputArray[index]);
            }            
        }
    }
    innerFunction(array);
    
    return resultArray;
}
 
const flatArray = flatten(myArray);
console.log(flatArray) // this should be [1,2,3,4,5,6,7,8]
 
const myArray2 = [1,2,3,4,[5,6,7,8, [9,10]]];
const flatArray2 = flatten(myArray2);
console.log(flatArray2) // this should be [1,2,3,4,5,6,7,8, 9, 10]

