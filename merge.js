function merge(array1, array2) {
    let array = [];

    let index1 = 0;
    let index2 = 0;
    while ((index1 < array1.length) && (index2 < array2.length)) {
        if (array1[index1] <= array2[index2]) {
            array.push(array1[index1]);
            index1++;
        }
        else {
            array.push(array2[index2]);
            index2++;
        }
    }
    if (index1 === array1.length) {
        array.push.apply(array, array2.slice(index2));
    }
    else {
        array.push.apply(array, array1.slice(index1));
    }

    return (array);
}

/*/
let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3, 4, 5];
let arr6 = [1, 2];
console.log(merge(arr5, arr6)); // [1,2,3,4,5]
//*/

function mergeSort(array) {
    if (array.length <= 1) {
        return (array);
    }
    const mid = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return (merge(left, right));
}

/*/
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSort([4, 20, 12, 10, 7, 9]));
console.log(mergeSort([0, -10, 7, 4]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([]));
console.log(mergeSort(nums));
//*/

module.exports = { merge, mergeSort};
