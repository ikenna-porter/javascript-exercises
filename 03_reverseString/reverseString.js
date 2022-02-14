const reverseString = function(originalStr) {
    newStr = "";
    for (let i = originalStr.length - 1; i >= 0; i--) {
        newStr += originalStr[i];
    }

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
