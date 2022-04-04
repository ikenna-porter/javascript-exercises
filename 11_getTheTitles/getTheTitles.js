const getTheTitles = function(books) {
    bookArr = [];
    books.forEach( book => bookArr.push(book.title));
    return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
