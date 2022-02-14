const repeatString = function(str, num) {
    
    let repeatedStr = "";
    if (num > -1) {
        for (let i = 0; i < num; i++) {
            repeatedStr += str;
        }
    } else {
        return "ERROR";
    }
    
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
