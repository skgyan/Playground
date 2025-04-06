// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14


const twoSum = (arr, target) => {
    const map = {};

    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        const diff = target - num;

        if(map[diff]) {
            return [map[diff].index, i];
        } else {
            map[num] = {num, index: i};
        }
    }

    return false;
}

console.log(twoSum([2,6,5,8,11], 14));