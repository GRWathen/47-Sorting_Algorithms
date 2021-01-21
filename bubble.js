function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        let finished = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
                finished = false;
            }
        }
        if (finished) {
            //break;
            return (array);
        }
    }
    return (array);
}

/*/
const nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546,
    75, 67, 4342, 32
];
console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
console.log(bubbleSort([0, -10, 7, 4]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([]));
console.log(bubbleSort(nums));
//*/

module.exports = bubbleSort;
