const sumAll = function (...args) {

    let min = 0;
    let max = 0;


    //Looks at parameters. If not numbers, returns "Error"
    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
        return "ERROR"
    } else if (args[0] < 0 || args[1] < 0) {
        return "ERROR"
    } else {
        //If parameters are valid determines which is the min and which is the max
        if (args[0] < args[1]) {
            min = args[0];
            max = args[1];
        } else {
            min = args[1];
            max = args[0];
        }
    }
    //Establishes sum variable and adds numbers between min and max to it (including min and max)
    let sum = 0;
    for (let i = min; i < max + 1; i++)
        sum += i;

    return sum;
};

sumAll(10)

// Do not edit below this line
module.exports = sumAll;
