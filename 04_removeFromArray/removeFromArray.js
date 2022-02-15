const removeFromArray = function (arr, ...itemsToRemove) {
    //Removes Arguments (itemsToRemove) from the array (arr) and replaces them with "dummyStr"
    for (let elem of arr) {
        for (let i = 0; i < itemsToRemove.length; i++) {
            if (elem === itemsToRemove[i]) {
                arr.splice(arr.indexOf(elem), 1, 'dummyStr')
            }
        }
    }
    //Pushes arr values to newArr if they are not equal to the dummyStr variable
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'dummyStr') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

removeFromArray([1, 2, 'hi', 3, 4, 'ho'], 'ho', 4);
// Do not edit below this line
module.exports = removeFromArray;
