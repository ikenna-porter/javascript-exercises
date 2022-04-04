const fibonacci = function(num) {
    //declare array
    const arr = [1, 1];

    //doesn't allow negative numbers
    if (num < 0) return "OOPS";

    //converts string numbers into numbers
    num = Number(num);

    //create for loop that increments up to num and pushes i + i-1 to arr
    for (let i = 1; i < num; i++) {
        arr.push(arr[i] + arr[i-1]);
    }
    return arr[num-1];
};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
