const palindromes = function (word) {
    
    //creates palindrome
    const wordArr = word.toLowerCase().split('').reverse();
    //removes spaces and special characters from palindrome
    let newArr = wordArr.filter( letter => {
        let wordChars = /[a-z]/;
        return wordChars.test(letter);
    });

    //removes spaces and special characters from word
    word = word.toLowerCase().split('').filter( letter => {
        let wordChars = /[a-z]/;
        return wordChars.test(letter);
    })

    console.log(word.join(''));
    console.log(newArr.join(''));
    if (newArr.join('') === word.join('')) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
